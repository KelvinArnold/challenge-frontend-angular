<template>
  <div class="clr-tv-item d-flex align-items-center"
    v-if="config">
    <img :src="config.imagem"
      :alt="config.name"
      width="120"
      class="mt-1 mb-1">
  </div>
</template>

<script>
export default {
  name: 'clr-tv-item',
  props: {
    config: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped lang="scss">
  .clr {
    &-tv {
      &-item {
        img {
          height: max-content;
          margin: 0 auto;
          height: auto;
        }
      }
    }
  }
</style>
