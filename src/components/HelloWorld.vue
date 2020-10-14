<template>
  <h1>{{ msg }}</h1>
  <button @click="increment">state.count is: {{ state.count }}</button>
  <br />
  <br />
  <button @click="use.increment">use.increment, count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p >
</template>

<script>
import store from '/@/store/world/hello'

const { state, use, getRefState } = store;


export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup() {
    const stateRef = getRefState();

    return {
      state,
      ...stateRef,
      use,
      ...use,
    }
  }
}
</script>