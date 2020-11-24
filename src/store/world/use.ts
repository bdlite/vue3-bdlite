interface IState<T> {
  [key: string]: T
}
export default (state: IState<any>) => ({
  changeCount() {
    const increment = () => state.count++;
    const decrement = () => state.count--;
    return { increment, decrement }
  },
  increment() {
    state.count++
  },
  decrement() {
    state.count--
  },
})
