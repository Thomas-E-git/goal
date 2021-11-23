import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue } from 'bootstrap-vue'
import './assets/app.scss'

Vue.use(BootstrapVue)
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faAt, faSadTear } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn, faJsSquare, faVuejs, faHtml5, faCss3Alt, faSass, faBootstrap, faGit, faNpm, faNode } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faGithub, faLinkedinIn, faAt, faJsSquare, faVuejs, faHtml5, faCss3Alt, faSass, faBootstrap, faGit, faNpm, faNode, faSadTear)

Vue.component('font-awesome-icon', FontAwesomeIcon)

import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
