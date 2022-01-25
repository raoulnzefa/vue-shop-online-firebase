import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import jQuery from 'jquery'
//import { fb } from './firebase'
import VueFirestore from 'vue-firestore'
require('firebase/firestore')

Vue.use(VueFirestore, {
    // O nome da propriedade. O padrão é '.key'.
    key: 'id',
    // se é enumerável ou não. O padrão é verdadeiro.
    enumerable: true
})
Vue.use(VueFirestore)






//window.$ = window.jQuery = jQuery;
//window.$ = window.jQuery = require('jquery')
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

import 'popper.js';
import 'bootstrap';
import './assets/app.scss'

import Swal from 'sweetalert2';

window.Swal = Swal;

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
})

window.Toast = Toast

Vue.config.productionTip = false



new Vue({
    router,
    render: h => h(App)
}).$mount('#app')