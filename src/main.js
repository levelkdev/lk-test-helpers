import {
  advanceBlockProvider,
  advanceToBlockProvider
} from './helpers/advanceToBlockProvider'
import assertJump from './helpers/assertJump'
import asyncReturnErr from './helpers/asyncReturnErr'
import ether from './helpers/ether'
import latestTimeProvider from './helpers/latestTimeProvider'
import {
  increaseTestrpcTimeProvider,
  increaseTimeProvider,
  increaseTimeToProvider
} from './helpers/increaseTimeProvider'
import expectEvent from './helpers/expectEvent'
import hashMessage from './helpers/hashMessage'
import shouldFail from './helpers/shouldFail'
import timerProvider from './helpers/timerProvider'
import toPromise from './helpers/toPromise'
import transactionMinedProvider from './helpers/transactionMinedProvider'

export default (web3) => {
  return {
    advanceBlock: advanceBlockProvider(web3),
    advanceToBlock: advanceToBlockProvider(web3),
    assertJump,
    asyncReturnErr,
    ether,
    expectEvent,
    latestTime: latestTimeProvider(web3),
    increaseTestrpcTime: increaseTestrpcTimeProvider(web3),
    increaseTime: increaseTimeProvider(web3),
    increaseTimeTo: increaseTimeToProvider(web3),
    hashMessage,
    shouldFail,
    timer: timerProvider(web3),
    toPromise,
    transactionMined: transactionMinedProvider(web3)
  }
}
