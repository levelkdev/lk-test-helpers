import { BigNumber } from 'lk-web3-utils'
import chai from 'chai'
import chaiBigNumber from 'chai-bignumber'

const should = chai.use(chaiBigNumber(BigNumber)).should()

export function inLogs (logs, eventName, eventArgs = {}) {
  const event = logs.find(function (e) {
    if (e.event === eventName) {
      for (const [k, v] of Object.entries(eventArgs)) {
        contains(e.args, k, v)
      }
      return true
    }
  })
  should.exist(event)
  return event
}

export async function inTransaction (tx, eventName, eventArgs = {}) {
  const { logs } = await tx
  return inLogs(logs, eventName, eventArgs)
}

function contains (args, key, value) {
  if (isBigNumber(args[key])) {
    args[key].should.be.bignumber.equal(value)
  } else {
    args[key].should.be.equal(value)
  }
}

function isBigNumber (object) {
  return object.isBigNumber ||
    object instanceof BigNumber ||
    (object.constructor && object.constructor.name === 'BigNumber')
}

export default {
  inLogs,
  inTransaction,
}


