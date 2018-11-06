'use strict'

var sha3  = require('js-sha3').sha3_256
var bs58checkBase = require('./base')

// SHA3(SHA3(buffer))
function sha3x2 (buffer) {
  var tmp = sha3.create().update(buffer).digest()
  return sha3.create().update(tmp).digest()
}

module.exports = bs58checkBase(sha3x2)
