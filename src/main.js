import Vue from 'vue'
import App from './App.vue'
import CheckboxRadio from 'vue-checkbox-radio';

Vue.use(CheckboxRadio);

Vue.config.productionTip = false

new Vue({
  
  render: h => h(App),
}).$mount('#app')
