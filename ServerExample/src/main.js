import Vue from 'vue'
import App from './App.vue'
import Server from './components/Server/Server.vue'
import ServerStatus from './components/Server/ServerStatus.vue'
import Header from './components/Shared/Header.vue'
import Footer from './components/Shared/Footer.vue'

Vue.component('my-server', Server);
Vue.component('my-server-status', ServerStatus);
Vue.component('my-header', Header);
Vue.component('my-footer', Footer);

new Vue({
  el: '#app',
  render: h => h(App)
})
