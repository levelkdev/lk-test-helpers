import asyncReturnErr from './asyncReturnErr'

export default async function expectRevert (asyncFn) {
  const err = await asyncReturnErr(asyncFn)
  assert.isAbove(err.message.search('revert'), -1, 'Revert must be returned')
}
