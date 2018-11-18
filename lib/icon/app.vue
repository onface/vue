<template >
  <span :class="rootClass" ><slot></slot></span>
</template>

<script>
export default {
  name: 'a-icon',
  computed: {
    rootClass: function () {
      let fixleftbug = false
      var fixLeftBugList = [ 'arrow_back_ios']
      var fixoverflow = false
      var fixoverflowList = [ 'star_rate' ]
      // materialicons 有个bug arrow_back_ios 不居中
      if (Array.isArray(this.$slots.default) && this.$slots.default[0]) {
        fixleftbug = fixLeftBugList.includes(this.$slots.default[0].text)
        fixoverflow = fixoverflowList.includes(this.$slots.default[0].text)
      }
      return {
        [`${this.prefixClassName}--fixleftbug`]: fixleftbug,
        [`${this.prefixClassName}--fixoverflow`]: fixoverflow,
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
  src: url(MaterialIcons-Regular.woff2) format('woff2');
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
.a-icon--fixoverflow {
  width: 1em;
  overflow: hidden;
}
.a-icon--fixleftbug {
  width: 1em;
  overflow: hidden;
}
.a-icon--fixleftbug:before {
  content: ' ';
  display: inline-block;
  width: .2em;
  overflow: hidden;
}
</style>
