<template >
  <div>
    <div v-for="item in categories" >
      <h4>{{item.name}}</h4>
      <ul class="icons">
        <li v-for="icon in item.icons" v-clipboard="'<a-icon>' + icon.id + '</a-icon>'"  @success="copySuccess" >
          <a-icon>{{icon.id}}</a-icon>
          <div class="icons-name">
            {{icon.id}}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import data from "./data.js"
import onface from "onface.vue"
import VueClipboards from 'vue-clipboards';
import message from "face-message"
import _ from "lodash"
import Vue from "vue"
Vue.use(VueClipboards);
export default {
  methods: {
    copySuccess: function () {
      message.success('已复制到粘贴板')
    }
  },
  data: function () {
    return {
      categories: data.categories
    }
  }
}
</script>

<style lang="less">
.icons {
  &:after {
    content: ' ';
    display: block;
    clear: both;
  }
  li {
    text-align: center;
    overflow: hidden;
    width: 3.5em;
    height: 3em;
    overflow: hidden;
    font-size: 1.7em;
    display: block;
    display: inline-block;
    cursor: pointer;
    opacity: 0.8;
    &:hover {
      opacity: 1;
      color:black;
    }
  }
}
.icons-name {
  display: block;
  font-size:12px;
  opacity: 0.2;
}
.remove-search {
  position: relative;
  z-index: 10;
  opacity: .7;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
}
.search {

}
</style>
