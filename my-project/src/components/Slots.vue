<template>
  <app-layout>
    <h1 slot="header">Here might be a page title</h1>

    <p>A paragraph for the main content.</p>
    <p>And another one.</p>

    <p slot="footer">Here's some contact info</p>

    <child>
      <template slot-scope="props">
        <span>hello from parent</span>
        <span>{{ props.text }}</span>
      </template>
    </child>

    <keep-alive>
      <component v-bind:is="'table-row'"></component>
    </keep-alive>
  </app-layout>
</template>

<script>
  import Vue from 'vue'

  Vue.component('child', function (resolve, reject) {
    setTimeout(function () {
      resolve({
        template: `
          <div class="child">
            <div>child</div>
            <slot text="hello from child"></slot>
          </div>
        `
      })
    }, 1000)
  })

  Vue.component('app-layout', {
    template: `
      <div class="container">
        <header>
          <slot name="header"></slot>
        </header>
        <main>
          <div>main s</div>
          <slot></slot>
          <div>main e</div>
        </main>
        <footer>
          <slot name="footer"></slot>
        </footer>
      </div>
    `
  })

  export default {
    data () {
      return {
        props: {}
      }
    }
  }
</script>
