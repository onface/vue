import Typo from "./typo"
import Layout from "./Layout"
import LayoutItem from "./Layout/item"
const comment = {
  install: function(Vue) {
    Vue.component(Typo.name, Typo)
    Vue.component(Layout.name, Layout)
    Vue.component(LayoutItem.name, LayoutItem)
  }
}
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(comment)
}
require('vue').use(comment)
export default comment
