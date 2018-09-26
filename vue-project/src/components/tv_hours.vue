<template>
  <ul class="list-hours" ref="hourslist" v-if="hours.length">
    <li></li>
    <li v-for="(h, h_key) in hours"
      :key="h_key"
      class="d-flex align-items-center justify-content-center">
      <span>{{h}}</span>
    </li>
  </ul>
</template>

<script>
import {CELL_TIME} from './../service/utils';
export default {
  name: 'tv-hours',
  data() {
    return {
      cell_time: CELL_TIME
    }
  },
  props: {
    hours: {
      type: Array,
      default: () => []
    }
  },
  mounted() {
    const list = document.querySelector('.list-hours');
    list.childNodes.forEach(element => {
      element.style.height = `${this.cell_time*6}px`
    });
  }
}
</script>

<style scoped lang="scss">
  .list {
    &-hours {
      list-style: none;
      li {
        border-bottom: 1px solid rgba($color: $grey, $alpha: .2);
        font-weight: bold;
        height: 90px;
        text-align: center;
        &:first-child {
          height: 40px !important;
        }
      }
    }
  }
</style>
