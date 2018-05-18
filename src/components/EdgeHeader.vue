<template>
  <div :is="tag" :class="className"><slot></slot></div>
</template>

<script>
import classNames from 'classnames';

export default {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    color: {
      type: String
    }
  },
  data() {
    return {
      className: classNames(
        'edge-header',
        this.color ? this.color : '',
        this.className
      ),
    };
  }
};
</script>
<style scoped>
.edge-header{
background-image: url("../assets/banner.jpeg");
background-repeat: no-repeat;
height: 500px;
background-size: 100%;
}
</style>
