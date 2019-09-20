import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORÁRIO!
// para qualquer requisição que o axios fizer, automaticamente terá um header com o nome Authorization
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwibmFtZSI6Ik11cmlsbyBTLiBDdW5oYSIsImVtYWlsIjoibXVyaWxvLnNhbnRAaG90bWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTY4OTkxODAxLCJleHAiOjE1NjkyNTEwMDF9.gWQcA9eUsFNEM5m7UbvqctqU10wH6IVA29TFd7IqkLY'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')