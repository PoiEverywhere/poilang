
/*!
 * Module dependencies.
 */

var assert = require('assert')
var poilang = require('../index')

describe('poilang', () => {
  describe('#random', () => {
    it('should return string when the function random called', () => {
      if (typeof poilang.random() !== 'string') {
        throw new Erorr('poilng not right')
      }
    })
  })
})