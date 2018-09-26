<template>
  <div class="container clr-home">
    <div class="row d-block">
      <ul class="list-group tc-black">
        <router-link
          tag="li"
          class="list-group-item"
          to="/products">
          Lista de produtos
        </router-link>
        <router-link
          tag="li"
          class="list-group-item"
          to="/shows">
          Grid de canais
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'view_home',
}
</script>

<style scoped lang="scss">
  
</style>
