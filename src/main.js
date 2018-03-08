import './styles.css';

import Vue from 'vue';
import VueMaterial from 'vue-material';

import i18n from './locale';

import './offline';

import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(VueMaterial);

new Vue({
  el: '#app',
  i18n,
  template: '<app/>',
  components: {App}
});

