import {expect} from '@oclif/test'
import {capitalize} from '../../src/utils/string.utils'

describe('string.utils', () => {
  describe('capitalize', () => {
    it('should capitalize the first letter of a string', () => {
      expect(capitalize('hello')).to.equal('Hello')
      expect(capitalize('hello world')).to.equal('Hello world')
      expect(capitalize('HELLO')).to.equal('HELLO')
      expect(capitalize('HELLO WORLD')).to.equal('HELLO WORLD')
    })
  })
})
