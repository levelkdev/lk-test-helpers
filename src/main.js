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
import EVMThrow from './helpers/EVMThrow'
import expectEvent from './helpers/expectEvent'
import expectRevert from './helpers/expectRevert'
import expectThrow from './helpers/expectThrow'
import hashMessage from './helpers/hashMessage'
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
    EVMThrow,
    expectEvent,
    expectRevert,
    expectThrow,
    latestTime: latestTimeProvider(web3),
    increaseTestrpcTime: increaseTestrpcTimeProvider(web3),
    increaseTime: increaseTimeProvider(web3),
    increaseTimeTo: increaseTimeToProvider(web3),
    hashMessage,
    timer: timerProvider(web3),
    toPromise,
    transactionMined: transactionMinedProvider(web3)
  }
}
