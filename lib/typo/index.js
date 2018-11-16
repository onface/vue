import App from './app.vue';

App.install = function(Vue) {
  App.component(App.name, App);
};

export default App;
