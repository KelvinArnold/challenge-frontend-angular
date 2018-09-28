<template>
  <div class="clr-view-shows" v-if="channels.length">
    <!-- Header -->
    <div class="col-xs-12 pl-2 pr-2 mb-3">
      <h5 class="font-weight-bold">Shows da <span class="tc-primary">Claro</span></h5>
      <p class="mt-2 mb-2">Confira todos os programas de nossos canais de TV!</p>
    </div>
    <div class="d-flex flex-row">
      <!-- Hour -->
      <div class="clr-hour bgc-light pl-2 pr-2">
        <tv-hours :hours="cell_hour"></tv-hours>
      </div>
      <!-- Shows -->
      <div class="clr-shows d-flex flex-row">
        <div class="clr-shows-columns col-12 col-sm-6 col-lg-3 p-0"
          v-for="(ch, ch_key) in channels"
          :key="ch_key">
          <div class="channels text-center bgc-primary tc-white">
            <strong>Canal {{ch}}</strong>
          </div>
          <tv-show v-for="(show, s_key) in shows"
            :key="s_key"
            v-if="show.id_canal == ch"
            :id="s_key"
            :config="show"
            :position="getShowPosition(show)">
            {{getShowPosition(show)}}
          </tv-show>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="col-xs-12 pl-2 pr-2">
      Carregando...
    </div>
  </div>
</template>

<script>
import {CELL_HOUR, START_TIME, getMinutesDiference} from './../service/utils';
import TvShow from './../components/tv_show';
import TvHours from './../components/tv_hours';

export default {
  name: 'views_shows',
  data() {
    return {
      cell_hour: CELL_HOUR
    }
  },
  components: {
    TvShow,
    TvHours
  },
  mounted() {
    this.$store.dispatch('ModuleChannels/GET_CHANNELS');
  },
  computed: {
    channels() {
      const store = this.$store.getters['ModuleChannels/GET_CHANNELS'];
      const channels = store.map(item => item.id_canal);
      const uniques = [];
      channels.forEach(item => {
        if (!uniques.includes(item)) {
          uniques.push(item);
        }
      });
      return uniques || [];
    },
    shows() {
      const shows = this.$store.getters['ModuleChannels/GET_CHANNELS'];
      return shows || [];
    }
  },
  methods: {
    getShowPosition(_show) {
      const height = getMinutesDiference(
        new Date(_show.dh_inicio),
        new Date(_show.dh_fim));
      const top = getMinutesDiference(
        new Date(START_TIME),
        new Date(_show.dh_inicio)) + 20;
      return {
        top,
        height
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .clr {
    &-hour {
      width: 40px;
    }
    &-shows {
      width: calc(100% - 40px);
      &-columns {
        border-right: 1px solid $light;
        overflow: hidden;
        position: relative;
        .channels {
          height: 40px;
          line-height: 40px;
        }
      }
    }
  }
</style>
