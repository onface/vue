<template>
    <span
        :class="[prefixClassName, typeClass, titleClass]"
    >
        <a-icon :class="backIconClass" v-if="title === 'back'">arrow_back_ios</a-icon>
        <slot></slot>
    </span>
</template>
<script type="text/babel">
import aIcon from '../icon'
export default {
    name: 'a-typo',
    components: {
      'a-icon': aIcon
    },
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
<style lang="less">
@p: a-typo;
.@{p}-pass {
    color: #5cb85c;
}
.@{p}-fail {
    color: #d9534f;
}
.@{p}-warn {
    color: #f0ad4e;
}
.@{p}-main {
    color: #337ab7;
}
.@{p}-desc {
    color: #666;
}
.@{p}-tip {
    color: gray;
}
.@{p}-ref {
    color: #337ab7;
    cursor: pointer;
}
.@{p}-title {
    display: block;
}
.@{p}-title--main {
    font-size: 1.8em;
    margin-top: .2em;
    margin-bottom: .2em;
    .@{p}-title--desc {
        display: inline-block;
        font-size:.55em;
        margin-bottom: 0;
    }
}
.@{p}-title--desc {
    font-size: 1em;
    color: #888;
    margin-bottom: .5em;
}
.@{p}-title--back {
    color: #a8abad;
    margin-bottom: .5em;
    cursor: pointer;
}
</style>
