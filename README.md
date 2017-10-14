# lk-test-helpers

Test helpers for smart contract development

## Usage

```
import lkTestHelpers from 'lk-test-helpers'

const {
  advanceBlock,
  advanceToBlock,
  assertJump,
  ether,
  latestTime,
  increaseTime,
  increaseTimeTo,
  EVMThrow,
  expectThrow,
  hashMessage,
  timer,
  toPromise,
  transactionMined
} = lkTestHelpers(web3)
```

# Build

`npm run build`
