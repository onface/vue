<template>
  <div :class="rootClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'a-layout',
  props: {
    prefixClassName: {
      type: String,
      default: 'a-layout'
    }
  },
  computed: {
    rootClass: function () {
      return this.prefixClassName
    }
  }
}
</script>

<style>
</style>
