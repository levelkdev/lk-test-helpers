import { BigNumber, toWei } from 'lk-web3-utils'

export default function ether(n) {
  return new BigNumber(toWei(n, 'ether'))
}
