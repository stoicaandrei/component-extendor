import {Args, Command, Flags} from '@oclif/core'
import * as fs from 'node:fs'
import {openai} from '../../services'

export default class Hello extends Command {
  static description = 'Extend a React component'

  static examples = [
    '$ oex extend -f Button.tsx --storybook --jest',
  ]

  static flags = {
    storybook: Flags.boolean({description: 'Add storybook', default: false}),
    jest: Flags.boolean({description: 'Add jest', default: false}),
  }

  static args = {
    file: Args.string({description: 'File to extend', required: true}),
  }

  async run(): Promise<void> {
    const {args, flags} = await this.parse(Hello)

    const file = args.file
    const filePath = process.cwd() + '/' + file
    if (!fs.existsSync(filePath)) {
      this.log(`File ${filePath} not found`)
      return
    }

    const fileContent = fs.readFileSync(filePath, 'utf8')

    const baseFilePath = filePath.replace(/(.*)\..+/, '$1')
    const fileExtension = filePath.replace(/.*\.(.+)/, '$1')
    const componentName = baseFilePath.split('/').pop()

    if (flags.storybook) {
      this.log('Creating storybook file')

      const storybookFilePath = `${baseFilePath}.stories.${fileExtension}`
      if (fs.existsSync(storybookFilePath)) {
        this.log('Storybook file already exists')
        return
      }

      this.log('Generating storybook code')
      const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `Write a storybook file for the following react component, import it from './${componentName}'
        
${fileContent}
`,
        max_tokens: 2048,
      })

      const data = response.data.choices[0].text || ''

      fs.writeFileSync(storybookFilePath, data)
    }

    if (flags.jest) {
      this.log('Creating jest file')

      const jestFilePath = `${baseFilePath}.test.${fileExtension}`
      if (fs.existsSync(jestFilePath)) {
        this.log(`File ${jestFilePath} already exists`)
        return
      }

      this.log('Generating jest code')
      const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `Write a jest file for the following react component, import it from './${componentName}'

${fileContent}
`,
        max_tokens: 2048,
      })

      const data = response.data.choices[0].text || ''

      fs.writeFileSync(jestFilePath, data)
    }

    this.log('Exntesions finished')
  }
}
