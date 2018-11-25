import Typo from "./typo"
import Row from "./layout/row"
import Col from "./layout/col"
import Icon from "./icon"
// import Layout from "./layout"
const comment = {
  install: function(Vue) {
    Vue.component(Typo.name, Typo)
    Vue.component(Row.name, Row)
    Vue.component(Col.name, Col)
    Vue.component(Icon.name, Icon)
    // Vue.component(Layout.name, Layout)
  }
}
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(comment)
}
require('vue').use(comment)
export default comment
