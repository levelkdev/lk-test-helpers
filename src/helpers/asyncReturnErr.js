export default async function asyncReturnErr (asyncFn) {
  try {
    await asyncFn
  } catch (err) {
    return err
  }
}
