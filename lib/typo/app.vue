<template>
    <span
        :class="[prefixClassName, typeClass, titleClass]"
    >
        <span class="ai ai-left" :class="backIconClass" v-if="title === 'back'"></span>
        <slot></slot>
    </span>
</template>
<script type="text/babel">
export default {
    name: 'a-typo',
    computed: {
        backIconClass () {
            return `${this.prefixClassName}-icon ${this.prefixClassName}-icon--back`
        },
        typeClass() {
            if (!this.type) {
                return ''
            }
            return `a-typo-${this.type}`
        },
        titleClass() {
            if (!this.title) {return ''}
            let title = this.title
            return `${this.prefixClassName}-title ${this.prefixClassName}-title--${title}`
        }
    },
    props: {
        prefixClassName: {
            type: String,
            default: 'a-typo'
        },
        type: {
            type: String
        },
        title: String
    }
}
</script>
