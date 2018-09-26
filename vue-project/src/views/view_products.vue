<template>
  <div class="clr-view-products">
    <!-- Header -->
    <div class="col-xs-12 pl-2 pr-2">
      <h5 class="font-weight-bold">Produtos da <span class="tc-primary">Claro</span></h5>
      <p class="mt-2 mb-2">Confira todos os produtos que a claro oferece para você!</p>
    </div>
    <!-- Render Products List -->
    <div v-if="!products.length">
      Carregando...
    </div>
    <div class="col-xs-12 d-flex flex-wrap" v-else>
      <product-card
        v-for="(p, p_key) in products" :key="p_key"
        :config="p"
        class="p-2">
      </product-card>
    </div>
  </div>
</template>

<script>
import ProductCard from "./../components/product_card";

export default {
  name: 'view_products',
  components: {
    ProductCard
  },
  mounted() {
    this.$store.dispatch('ModuleProducts/GET_PRODUCTS');
  },
  computed: {
    products() {
      const p = this.$store.getters['ModuleProducts/GET_PRODUCTS'];
      return p.filter(item => item.exibir) || null;
    }
  }
}
</script>

<style scoped lang="scss">

</style>
