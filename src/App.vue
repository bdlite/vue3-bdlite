<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <br />
  <router-view />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <ReuseWorld />
  <AfterReuseWorld />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ReuseWorld from './components/ReuseWorld.vue'
import AfterReuseWorld from './components/AfterReuseWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ReuseWorld,
    AfterReuseWorld,
  }
}
</script>
