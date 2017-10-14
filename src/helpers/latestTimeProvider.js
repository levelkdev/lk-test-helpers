import moment from 'moment'

// Returns a moment.js instance representing the time of the last mined block
export default (web3) => {
  return function latestTime() {
    return moment.unix(web3.eth.getBlock('latest').timestamp)
  }
}
