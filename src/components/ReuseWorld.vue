<template>
  <h1>Reuse Store</h1>
  <button @click="click">click side effect, state.count is: {{ state.count }}</button>
  <br />
  <br />
  <button @click="use.decrement">use.decrement, count is: {{ count }}</button>
  <br />
  <br />
  <button @click="increment">increment, helloState.count is: {{ helloState.count }}</button>
</template>

<script>
import { reactive } from 'vue'

import store from '/@/store/world/reuse.js'
import helloInitialState from '/@/store/world/state'

const { state, use, getRefState } = store;

const helloState = reactive(helloInitialState);
helloInitialState.count = 10;


export default {
  name: 'ReuseWorld',
  setup() {
    const stateRef = getRefState();
    stateRef.count.value = 6;

    const click = () => {
      use.increment();
      helloInitialState.count = 100;
    }

    const increment = () => {
      helloState.count++;
    }

    return {
      state,
      ...stateRef,
      use,
      ...use,
      helloState,
      click,
      increment,
    }
  }
}
</script>