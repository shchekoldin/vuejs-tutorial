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

    <transition>
      <table v-if="items.length > 0">
        <tr>
          <td>items {{ items.length }}</td>
        </tr>
      </table>
      <p v-else>Sorry, no items found.</p>
    </transition>

    <transition-group name="list" tag="p">
      <span v-for="item in items" v-bind:key="item" class="list-item">
        {{ item }}
      </span>
    </transition-group>

    <button v-on:click="addItem">Add Item</button>
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
        items: [],
        props: {}
      }
    },
    methods: {
      addItem () {
        console.log('add item')

        this.items.push('item' + Math.random())
      }
    }
  }
</script>

<style>
  .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
</style>
