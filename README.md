# lk-test-helpers

Test helpers for smart contract development

## Usage

```
import lkTestHelpers from 'lk-test-helpers'

const {
  asyncReturnErr,
  advanceBlock,
  advanceToBlock,
  assertJump,
  ether,
  EVMThrow,
  expectEvent,
  expectRevert,
  expectThrow,
  latestTime,
  increaseTestrpcTime,
  increaseTime,
  increaseTimeTo,
  hashMessage,
  timer,
  toPromise,
  transactionMined
} = lkTestHelpers(web3)
```

# Build

`npm run build`
