// timer for tests specific to testrpc
export default function timerProvider(web3) {
  return function timer (s) {
    return new Promise((resolve, reject) => {
      web3.currentProvider.sendAsync({
        jsonrpc: '2.0', 
        method: 'evm_increaseTime',
        params: [s], // 60 seaconds, may need to be hex, I forget
        id: new Date().getTime() // Id of the request; anything works, really
      }, function(err) {
        if (err) return reject(err);
        resolve();
      });
      //setTimeout(() => resolve(), s * 1000 + 600) // 600ms breathing room for testrpc to sync
    });
  };
}
