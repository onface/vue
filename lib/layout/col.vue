<template>
    <span
        :class="[ rootClass ]"
        :style="rootStyle"
    >
        <slot></slot>
    </span>
</template>
<script type="text/babel">
export default {
    name: 'a-col',
    inject: ['getSpace'],
    computed: {
        rootClass () {
          return {
            [`${this.prefixClassName}--${this.span}`]: this.span,
            [this.prefixClassName]: true
          }
        },
        rootStyle () {
          let space = this.getSpace()
          return {
            'padding-left': space,
            'padding-right': space,
          }
        }
    },
    props: {
        prefixClassName: {
            type: String,
            default: 'a-col'
        },
        span: {
          type: String
        },
    }
}
</script>
<style lang="less">
.a-col {
    float: left;
    box-sizing: border-box;
}
.a-col--1 {
    width: 100/24*1%;
}
.a-col--2 {
    width: 100/24*2%;
}
.a-col--3 {
    width: 100/24*3%;
}
.a-col--4 {
    width: 100/24*4%;
}
.a-col--5 {
    width: 100/24*5%;
}
.a-col--6 {
    width: 100/24*6%;
}
.a-col--7 {
    width: 100/24*7%;
}
.a-col--8 {
    width: 100/24*8%;
}
.a-col--9 {
    width: 100/24*9%;
}
.a-col--10 {
    width: 100/24*10%;
}
.a-col--11 {
    width: 100/24*11%;
}
.a-col--12 {
    width: 100/24*12%;
}
.a-col--13 {
    width: 100/24*13%;
}
.a-col--14 {
    width: 100/24*14%;
}
.a-col--15 {
    width: 100/24*15%;
}
.a-col--16 {
    width: 100/24*16%;
}
.a-col--17 {
    width: 100/24*17%;
}
.a-col--18 {
    width: 100/24*18%;
}
.a-col--19 {
    width: 100/24*19%;
}
.a-col--20 {
    width: 100/24*20%;
}
.a-col--21 {
    width: 100/24*21%;
}
.a-col--22 {
    width: 100/24*22%;
}
.a-col--23 {
    width: 100/24*23%;
}
.a-col--24 {
    width: 100/24*24%;
}
</style>
