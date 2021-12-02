import Splitting from "splitting";
import Vue from 'vue'

Vue.use((Vue, options) => {
  Vue.prototype.$Splitting = Splitting
})

Vue.use((Vue, options) => {
  Vue.prototype.isAnimation = false
})