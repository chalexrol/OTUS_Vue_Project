import Vue from 'vue';
import App from './App.vue';
import CheckboxRadio from 'vue-checkbox-radio';
import VueRouter from 'vue-router';
import Hello from './components/Hello.vue';
import Game from './components/Game.vue';



Vue.use(CheckboxRadio);
Vue.use(VueRouter);

const routes = [
  {path: '/', component: Hello },
  {path: '/game', component: Game },
]

const router = new VueRouter({mode:'history',routes})


 Vue.config.productionTip = false

new Vue({
  
  render: h => h(App), router
}).$mount('#app')   
