<template>
  <div class="card-product mt-3 col-12 col-lg-4 col-xl-3 p-2">
    <div class="card-product-container w-100 pl-3 pr-3 pt-3 pb-3">
      <div class="d-flex flex-column justify-content-between card-product-content">
        <div class="w-100 card-product-top">
          <header>
            <div class="title d-flex w-100 align-items-center">
              <claro-icons :icon="config.tipo"></claro-icons>
              <h5 class="tc-primary">{{config.nome}}</h5>
            </div>
            <p v-if="config.descricao">{{config.descricao}}</p>
          </header>
          <!-- Tv List -->
          <div class="tv-list mb-2 d-flex flex-wrap" v-if="config.listaCanais">
            <tv-item
              v-for="(tv, tv_key) in config.listaCanais"
              :key="tv_key"
              :config="tv"
              class="col-12 col-sm-3 col-md-6">
            </tv-item>
          </div>
        </div>
        <div class="w-100 card-product-bottom">
          <!-- Price -->
          <div v-if="config.preco && config.preco < config.precoDe">
            <small class="tc-grey">
              <strong class="mr-1">De:</strong>
              {{formatNumber(config.precoDe)}}
            </small>
            <h5 class="tc-primary mb-1">
              <strong class="mr-1">Por:</strong>
              {{formatNumber(config.preco)}}
            </h5>
          </div>
          <div v-else>
            <h5 class="tc-primary mb-1">
              <strong class="mr-1">Por:</strong>
              {{formatNumber(config.precoDe)}}
            </h5>
          </div>
          <!-- Others -->
          <p v-if="config.adesao"><strong>Adesão:</strong>{{formatNumber(config.adesao)}}</p>
          <p><strong>Instalação:</strong>{{config.taxaInstalacao ? formatNumber(config.taxaInstalacao) : 'Gratis'}}</p>
          <p class="btn bgc-primary mt-2 tc-white btn-block text-uppercase font-weigth-bold"><strong>{{config.tipo + ' ' + config.id}}</strong></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TvItem from './tv_item';
import ClaroIcons from './claro_icons';
import { formatCurrency } from "./../service/utils";

export default {
  name: 'product-card',
  data() {
    return {
      not_found: 'Não existem dados para sereme exibidos :(',
    }
  },
  props: {
    config: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    TvItem,
    ClaroIcons
  },
  methods: {
    formatNumber(num) {
      return formatCurrency(num);
    }
  }
}
</script>

<style lang="scss">
  .card {
    &-product {
      min-height: 360px;
      &-container {
        border-radius: $base-round;
        border: 1px solid rgba($color: $grey, $alpha: .4);
        height: 100%;
      }
      &-content {
        height: 100%;
      }
    }
  }
</style>
