import {Args, Command} from '@oclif/core'
import * as fs from 'node:fs'
import {capitalize} from '../../utils'

export default class Hello extends Command {
  static description = 'Say hello'

  static examples = [
    `$ oex create atom Button 
`,
  ]

  static args = {
    category: Args.string({description: 'Component category', required: true}),
    name: Args.string({description: 'Component name', required: true}),
  }

  async run(): Promise<void> {
    const {args} = await this.parse(Hello)
    const category = args.category
    const name = capitalize(args.name)

    this.log('Searching for src folder...')

    const dir = process.cwd()
    let srcDir = `${dir}/src`
    if (dir.includes('/src')) {
      srcDir = dir.split('src')[0] + 'src'
    }

    if (!fs.existsSync(srcDir)) {
      this.log('src folder not found')
      return
    }

    this.log('src folder found')

    const categoryDir = `${srcDir}/${category}`
    if (fs.existsSync(categoryDir)) {
      this.log('category folder found')
    }     else {
      this.log('category folder not found')
      this.log(`creating ${category} folder`)
      fs.mkdirSync(categoryDir)
    }

    const componentDir = `${categoryDir}/${name}`
    if (fs.existsSync(componentDir)) {
      this.log('component folder already exists')
      return
    }

    this.log(`creating ${name} folder`)
    fs.mkdirSync(componentDir)
    fs.writeFileSync(`${componentDir}/index.ts`, indexFileContent(name))
    fs.writeFileSync(`${componentDir}/${name}.tsx`, componentFileContent(name))
  }
}

const indexFileContent = (componentName: string) => `export * from './${componentName}'`

const componentFileContent = (componentName: string) => `import React from 'react'

interface ${componentName}Props {};

export const ${componentName} = (props: Props) => {
    return (
        <div>
            ${componentName}
        </div>
    )
}
`
