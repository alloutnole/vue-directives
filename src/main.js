/* Styles */
import '@/scss/main.scss';
import '@mdi/font/css/materialdesignicons.css';

/* Core */
import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy';
// import 'buefy/dist/buefy.css';
import Bulma from 'bulma/bulma.sass';
import moment from 'moment';

/* Router */
import router from './router';

Vue.prototype.moment = moment;
Vue.use(Buefy);
Vue.use(Bulma);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
