import {Args, Command, Flags} from '@oclif/core'
import * as fs from 'node:fs'

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

    const baseFilePath = filePath.replace(/(.*?)\..+/, '$1')
    const fileExtension = filePath.replace(/.*?\.(.+)/, '$1')

    if (flags.storybook) {
      const storybookFilePath = `${baseFilePath}.stories.${fileExtension}`
      if (fs.existsSync(storybookFilePath)) {
        this.log(`File ${storybookFilePath} already exists`)
        return
      }

      this.log('Creating storybook')
      fs.writeFileSync(storybookFilePath, fileContent)
    }

    if (flags.jest) {
      const jestFilePath = `${baseFilePath}.test.${fileExtension}`
      if (fs.existsSync(jestFilePath)) {
        this.log(`File ${jestFilePath} already exists`)
        return
      }

      this.log('Creating jest')
      fs.writeFileSync(jestFilePath, fileContent)
    }

    this.log('Exntesions finished')
  }
}
