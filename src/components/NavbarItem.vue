<template>
  <li :is="tag" :class="[className, {'ripple-parent': waves}]" @click="wave">
    <a :href="href" class="nav-link"><slot></slot></a>
  </li>
</template>

<script>
import classNames from 'classnames';
import waves from '../mixins/waves';

export default {
  props: {
    tag: {
      type: String,
      default: 'li'
    },
    active: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
      default: '#'
    },
    waves: {
      type: Boolean,
      default: true
    },
    wavesFixed: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      className: classNames(
         this.color ? this.color : '',
        'nav-item',
        this.active ? 'active' : ''
      )
    };
  },
  mixins: [waves]
};
</script>

<style scoped>
.nav-link
{
font-size: 15px !important;
font-weight: normal !important;
color: #484848 !important;
}
.nav-link:hover
{
  border-bottom:3px solid ;
}
</style>
