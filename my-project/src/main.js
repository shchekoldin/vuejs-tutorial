// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.component('todo-item', {
  props: ['todo', 'idx'],
  template: '<li>{{ todo.text }} {{ idx }}</li>'
})

Vue.component('table-row', {
  template: '<tr><td>Q</td></tr>'
})

var Child2 = {
  props: ['myMessage'],
  template: '<div>A custom component2! {{myMessage}}</div>'
}

var Child = {
  props: {
    'myMessage': Number,
    required: true
  },
  template: '<div>A custom component! {{myMessage}} <my-component2 :my-message="myMessage + 1"/></div>',
  components: { 'my-component2': Child2 }
}

var testSym = Symbol('vue@test')

console.log(testSym)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<div><App/><my-component data-custom="r" :my-message="123"/></div>',
  components: { App, 'my-component': Child }
})
