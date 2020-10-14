<template>
  <h1>After Reuse Store</h1>
  <button @click="click">click side effect, state.count is: {{ state.count }}</button>
  <br />
  <br />
  <button @click="use.decrement">use.decrement, state.count is: {{ state.count }}</button>
  <br />
  <br />
  <button @click="increment">increment helloState.count side effect</button>
  <!-- <br />
  <br />
  <button @click="increment">increment helloState.count and update, helloState.count is: {{ helloState.count }}</button> -->
  <br />
  <br />
  <button @click="decrement">decrement helloInitialState.count side effect and no update, see console, helloState.count is: {{ helloInitialState.count }}</button>
</template>

<script>
import { reactive } from 'vue'

import store from '/@/store/world/reuse.js'
import helloInitialState from '/@/store/world/state'

const { state, use, getRefState } = store;

const helloState = reactive(helloInitialState);
helloInitialState.count = 20;


export default {
  name: 'AfterReuseWorld',
  setup() {
    const stateRef = getRefState();
    stateRef.count.value = 9;

    const click = () => {
      use.increment(); // update
      helloInitialState.count = 200;
      console.log('AfterReuseWorld click: helloInitialState',helloInitialState);
    }

    const increment = () => {
      helloState.count++; // update and helloInitialState is not reactived
    }

    const decrement = () => {
      helloInitialState.count--; // no update
      console.log('AfterReuseWorld decrement: helloInitialState',helloInitialState);
    }

    return {
      state,
      use,
      // helloState,
      helloInitialState,
      click,
      increment,
      decrement,
    }
  }
}
</script>