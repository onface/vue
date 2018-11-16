<template>
    <span
        :class="[ prefixClassName ]"
        :style="rootStyle"
    >
        <slot></slot>
    </span>
</template>
<script type="text/babel">
export default {
    name: 'a-layout-item',
    inject: ['getSpace'],
    computed: {
        rootStyle () {
            return {
                'padding-left': this.getSpace()/2 + 'px',
                'padding-right': this.getSpace()/2 + 'px',
            }
        }
    },
    props: {
        prefixClassName: {
            type: String,
            default: 'a-layout-item'
        }
    }
}
</script>
