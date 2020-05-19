import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import { routes } from './routes';
import store from './store/store'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.http.options.root = 'https://travel-app-319eb.firebaseio.com/';

Vue.filter('currency', (value)=>{
  return 'Rs ' + value.toLocaleString();
});

const router = new VueRouter({
  routes,
  mode : 'history',
  scrollBehavior(to){
    if(to.hash){
      return {selector : to.hash}
    }
    return{x:0,y:0}
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
