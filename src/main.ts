import Vue from 'vue'
import App from './App.vue'
//引入hotcs.js转rem;
import '../node_modules/base_mixins/hotcss.min'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
