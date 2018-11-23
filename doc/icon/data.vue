<template >
  <div>
    <form @submit.prevent="searchIcon">
      <input type="text" v-model="search" /><button>Search</button>
    </form>
    <div v-for="item in filterCategories" >
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
import extend from "safe-extend"
Vue.use(VueClipboards);
export default {
  created: function () {
     this.searchIcon.bind(this)()
  },
  methods: {
    searchIcon: function () {
      let search = this.search.trim()
      if (search === '') {
        this.filterCategories = this.categories
      }
      this.filterCategories = this.categories.map(function(item) {
        // 复制意外修改到 categories
        item = extend.clone(item)
        item.icons = item.icons.filter(function (icon) {
          return icon.id.indexOf(search) !== -1 || search.indexOf(icon.id) !== -1
        })
        if (item.icons.length === 0) {
          return false
        }
        return item
      }).filter(function (item) {return item})
    },
    copySuccess: function () {
      message.success('已复制到粘贴板')
    }
  },
  data: function () {
    return {
      search: '',
      categories: data.categories,
      filterCategories: []
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
