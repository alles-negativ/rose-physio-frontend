import Splitting from "splitting";
import Vue from 'vue'

Vue.use((Vue, options) => {
  Vue.prototype.$Splitting = Splitting
})