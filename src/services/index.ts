import {Configuration, OpenAIApi} from 'openai'
import apiKey from './api-key'

const configuration = new Configuration({
  apiKey,
})
export const openai = new OpenAIApi(configuration)

