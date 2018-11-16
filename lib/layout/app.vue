<template>
    <div
        :class="rootClass"
    >
        <slot></slot>
    </div>
</template>
<script type="text/babel">
export default {
    name: 'a-layout',
    provide: function () {
        const self = this
        return {
            getSpace: function () {
                return self.space
            }
        }
    },
    data: function () {
        return {

        }
    },
    computed: {
        rootClass: function () {
            return {
                [`${this.prefixClassName}`]: true,
                [`${this.prefixClassName}--border`]: this.border
            }
        }
    },
    props: {
        prefixClassName: {
            type: String,
            default: 'a-layout'
        },
        space: {
            type: Number
        }
    }
}
</script>
