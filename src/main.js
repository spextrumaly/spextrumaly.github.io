import Vue from 'vue'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-dark.css' // use carbon theme
Vue.use(MuseUI)
import App from './App.vue'




new Vue({
  el: '#app',
  render: h => h(App)
})
