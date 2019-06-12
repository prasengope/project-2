import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap';
import 'popper.js';
import 'vue2-google-maps';
import BootstrapVue from 'bootstrap-vue';
import 'moment-timezone';
import moment from 'moment-timezone';
import VueMoment from 'vue-moment';

import Datetime from 'vue-datetime'
// You need a specific loader for CSS files
import 'vue-datetime/dist/vue-datetime.css'

Vue.use(Datetime)

Vue.use(VueMoment, {
  moment,
})

import * as VueGoogleMaps from 'vue2-google-maps'

var keys = require("../../keys/keys.js");


Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
// import 'maps.js';
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

//GOOGLE MAPS PLUGIN Below

 
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDFRyu277w4V5p1mjxGseqqo1yRXqBRbBw',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
 
    //// If you want to set the version, you can do so:
    // v: '3.26',
  },
 
  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,
 
  //// If you want to manually install components, e.g.
  //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  //// Vue.component('GmapMarker', GmapMarker)
  //// then disable the following:
  // installComponents: true,
})