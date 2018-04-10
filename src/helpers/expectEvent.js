export default async function expectEvent (eventName, asyncFn) {
  const { logs } = await asyncFn
  const event = logs.find(e => e.event === eventName)
  assert.isFalse(typeof event === 'undefined', 'Event must be triggered')
}
