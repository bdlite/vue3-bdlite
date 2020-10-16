export default (state) => ({
  changeCount() {
    const increment = () => state.count++;
    const decrement = () => state.count--;
    return { increment, decrement }
  },
  increment() {
    state.count++
  },
  decrement() {
    state.count--;
  },
})
