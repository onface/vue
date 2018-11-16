import App from './item.vue';

App.install = function(Vue) {
  App.component(App.name, App);
};

export default App;
