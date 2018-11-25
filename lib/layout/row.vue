<template>
    <div
        :class="rootClass"
        :style="rootStyle"
    >
        <slot></slot>
    </div>
</template>
<script type="text/babel">
export default {
    name: 'a-row',
    provide: function () {
        const self = this
        return {
            getSpace: function () {
                return self.styleSpace
            }
        }
    },
    data: function () {
        return {

        }
    },
    computed: {
        styleSpace: function () {
          let space = this.space
          var unit = ''
          if (!/\D/.test(space)) {
            unit = 'px'
          }
          else {
            unit = space.replace(/\d/g, '')
          }
          space = parseInt(space.replace(/\D/g, ''))/2
          return space + unit
        },
        rootStyle: function () {
          return {
            'margin-left': '-' + this.styleSpace,
            'margin-right': '-' + this.styleSpace
          }
        },
        rootClass: function () {
            return {
                [`${this.prefixClassName}`]: true,
                [`${this.prefixClassName}--border`]: this.border,
                [`${this.prefixClassName}--part`]: this.part,
            }
        }
    },
    props: {
        prefixClassName: {
            type: String,
            default: 'a-row'
        },
        space: {
            type: String,
            default: '0'
        },
        part: {
          type: Boolean
        }
    }
}
</script>
<style lang="less">
.a-row {
  &:after {
    content: ' ';
    display: block;
    clear: both;
  }
}
</style>
