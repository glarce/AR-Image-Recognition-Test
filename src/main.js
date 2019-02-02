import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

import {
  MdButton,
  MdProgress,
  MdDialog
} from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'

Vue.use(MdButton)
Vue.use(MdProgress)
Vue.use(MdDialog)

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)


Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')