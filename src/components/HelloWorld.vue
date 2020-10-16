<template>
  <h1>{{ msg }}</h1>
  <button @click="increment">state.count is: {{ state.count }}</button>
  <br />
  <br />
  <button @click="increment">count is: {{ count }}</button>
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
    const { increment } = use.changeCount();

    return {
      state,
      ...stateRef,
      increment,
    }
  }
}
</script>
