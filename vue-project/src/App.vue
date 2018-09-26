<template>
  <div id="app">
    <claro-header></claro-header>
    <section class="clr-content p-3">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import ClaroHeader from './components/claro_header.vue'

export default {
  name: 'app',
  components: {
    ClaroHeader
  }
}
</script>

<style lang="scss">
  .clr {
    &-content {
      overflow-x: auto;
    }
  }
</style>
