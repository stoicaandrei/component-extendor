import {Args, Command, Flags} from '@oclif/core'
import * as fs from 'node:fs'
import {openai} from '../services'

export default class Hello extends Command {
  static description = 'Extend a React component'

  static examples = [
    '$ oex testai',
  ]

  async run(): Promise<void> {
    this.log('Testing AI')
    try {
      const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: 'Say this is a test',
        temperature: 0,
        max_tokens: 7,
      })

      const data = response.data.choices[0].text
      console.log(response.data)
    } catch (error) {
      console.log(error)
      console.log((error as any).response.data)
    }

    // console.log(response.data)
    // this.log(response.data)
  }
}
