<template>
  <header class="clr-header">
    <div class="container-fluid">
      <div class="row d-block bgc-light pt-2 pb-3 pl-3 pr-3">
        <p class="clr-back">
          <router-link tag="span" to="/" class="tc-black">
          <arrow-icon v-if="this.$route.name != 'home'"></arrow-icon> Home</router-link>
        </p>
        <h4 class="title tc-primary font-weight-bold">Claro</h4>
      </div>
    </div>
  </header>
</template>

<script>
import ArrowIcon from './../assets/images/arrow-icon.svg';

export default {
  name: 'claro-header',
  components: {
    ArrowIcon
  }
}
</script>

<style scoped>
  
</style>
