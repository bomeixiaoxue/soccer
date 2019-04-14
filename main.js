import Vue from 'vue'
import App from './App'

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

Vue.prototype.userUrl = 'http://192.168.0.100:8762';
Vue.prototype.ActivityUrl = 'http://192.168.0.100:8763'; 
Vue.prototype.ChatUrl = 'http://192.168.0.100:8764'; 