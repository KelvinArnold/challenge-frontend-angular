<template>
  <div class="claro-icon">
    <celular-icon v-if="icon === 'celular'"></celular-icon>
    <fixo-icon v-else-if="icon === 'fixo'"></fixo-icon>
    <internet-icon v-else-if="icon === 'internet'"></internet-icon>
    <tv-icon v-else></tv-icon>
  </div>
</template>

<script>
import CelularIcon from './../assets/images/celular.svg';
import FixoIcon from './../assets/images/fixo.svg';
import InternetIcon from './../assets/images/internet.svg';
import TvIcon from './../assets/images/tv.svg';

export default {
  name: 'claro-icons',
  data() {
    return {}
  },
  props: {
    icon: {
      type: String,
      default: ''
    }
  },
  components: {
    CelularIcon,
    FixoIcon,
    InternetIcon,
    TvIcon
  }
}
</script>

<style scoped lang="scss">
  .claro-icon {
    display: inline-block;
    width: 40px;
    height: 40px;
    svg {
      display: inline-block;
      transform: scale(.3) translateX(-25%) translateY(-25%);
      position: absolute;
      left: 0;
      top: 0;
    }
  }
</style>
