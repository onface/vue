<template >
  <span :class="rootClass" ><slot></slot></span>
</template>

<script>
export default {
  name: 'a-icon',
  computed: {
    rootClass: function () {
      let is_arrow_back_ios = false
      // materialicons 有个bug arrow_back_ios 不居中
      if (Array.isArray(this.$slots.default) && this.$slots.default[0] && this.$slots.default[0].text === 'arrow_back_ios') {
        is_arrow_back_ios = true
      }
      return {
        [`${this.prefixClassName}--arrow_back_ios`]: is_arrow_back_ios,
        [this.prefixClassName]: true
      }
    }
  },
  props: {
      prefixClassName: {
          type: String,
          default: 'a-icon'
      }
  }
}
</script>
<style >
@font-face {
  font-family: 'onface vue Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(MaterialIcons.woff2) format('woff2');
}

.a-icon {
  font-family: 'onface vue Material Icons';
  font-weight: normal;
  font-style: normal;
  display: inline-block;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: 'liga';
  vertical-align: text-bottom;
  position: relative;
  top:-.1em;
}
.a-icon--arrow_back_ios {
  width: 1em;
  overflow: hidden;
}
.a-icon--arrow_back_ios:before {
  content: ' ';
  display: inline-block;
  width: .2em;
  overflow: hidden;
}
</style>
