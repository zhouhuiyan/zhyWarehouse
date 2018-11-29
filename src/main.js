// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/*重置样式*/
import './assets/style/reset.css'
/*解决一像素图标问题*/
import './assets/style/border.css'
/*iconfont 图标库*/
import './assets/style/iconfont.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
