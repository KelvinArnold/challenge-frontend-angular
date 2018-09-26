<template>
  <div class="show bgc-black tc-white p-2" :id="`show${id}`" v-if="config">
    <strong>{{config.titulo}}</strong>
    <p>{{getTime(config.dh_inicio)}} - {{getTime(config.dh_fim)}}</p>
  </div>
</template>

<script>
import {CELL_TIME, getTime} from './../service/utils';

export default {
  name: 'tv-show',
  data() {
    return {
      cell_time: CELL_TIME
    }
  },
  props: {
    id: {
      type: Number,
      default: Math.random() * (1000 - 1000) * 100,
    },
    position: {
      type: Object,
      default: () => {
        return {
          top: 0,
          height: 105,
        }
      }
    },
    config: {
      type: Object,
      default: () => {},
    }
  },
  mounted() {
    const show = document.querySelector(`#show${this.id}`);
    if (show) {
      show.style.top = `${this.cell_time*((this.position.top)/10)}px`;
      show.style.height = `${this.cell_time*(this.position.height/10)}px`;
    }
  },
  methods: {
    getTime(time) {
      return getTime(time);
    }
  }
}
</script>

<style scoped lang="scss">
  .show {
    position: absolute;
    transition: .2s ease-in-out all;
    width: 100%;
    border: 1px solid $white;
    box-sizing: border-box;
  }
</style>
