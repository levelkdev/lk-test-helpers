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
  expectEvent,
  latestTime,
  increaseTestrpcTime,
  increaseTime,
  increaseTimeTo,
  hashMessage,
  shouldFail,
  timer,
  toPromise,
  transactionMined
} = lkTestHelpers(web3)
```

# Build

`npm run build`
