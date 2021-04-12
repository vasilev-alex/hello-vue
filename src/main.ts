import Vue from 'vue';
import App from './App.vue';
import * as ModalDialogs from 'vue-modal-dialogs'
Vue.use(ModalDialogs)


// import vSelect from 'vue-select';
//
// Vue.component('v-select', vSelect);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
