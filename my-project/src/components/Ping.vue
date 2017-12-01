<template xmlns:v-bind="http://www.w3.org/1999/xhtml"
          xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div class="ping" v-bind:title="title">
    {{ message | toUpperCase }}
    {{ reversedMessage1 }}
    {{ fullName }}
    <p v-if="seen">Now you see me {{ 1 + 1 + ' = 1 + 1' }}</p>
    <h1 v-if="ok">Yes</h1>
    <h1 v-else>No</h1>
    <ol>
      <todo-item
        v-for="(todo, index) in todos"
        :idx="index"
        v-bind:todo="todo"
        v-bind:key="todo.id"
        v-bind:class="todo.classObj">
      </todo-item>
    </ol>
    <button v-on:click="reverseMessage">Reverse Message</button>
    <form v-on:submit.prevent="onSubmit">
      <input ref="input" v-model="message">
      <button type="submit" v-bind:disabled="isButtonDisabled">Button</button>
    </form>

    <ul>
      <template v-for="item in items" v-if="item > 1">
        <li>{{ item }}</li>
        <li class="divider"></li>
      </template>
    </ul>

    <table border="1">
      <tr is="table-row"></tr>
      <tr is="table-row"></tr>
      <tr is="table-row"></tr>
    </table>
  </div>
</template>

<script>
  window.items = [1, 2, 3]

  export default {
    name: 'ping',
    message: 'Ping!',
    data () {
      const data = {
        loginType: '',
        ok: false,
        message: 'ping!',
        title: 'test',
        seen: true,
        isButtonDisabled: false,
        todos: [
          {
            classObj: {
              active: true
            },
            id: 1,
            text: 'Learn Vue'
          },
          {
            classObj: {
              active: false
            },
            id: 2,
            text: 'Learn Vue 2'
          }
        ],
        items: window.items,
        firstName: 'Foo',
        lastName: 'Bar',
        fullName: 'Foo Bar'
      }

      setInterval(() => (data.title = Math.random()), 1000)

      return data
    },
    methods: {
      reverseMessage () {
        this.message = this.message.split('').reverse().join('')
        this.$set(this, 'ok', true)
        console.log(this.$refs)
      },
      onSubmit () {
        this.isButtonDisabled = true
        console.log('onSubmit')
      }
    },
    filters: {
      toUpperCase: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.toUpperCase()
      }
    },
    created () {
      console.log('created')
    },
    computed: {
      // a computed getter
      reversedMessage1: function () {
        // `this` points to the vm instance
        return this.message.split('').reverse().join('')
      }
    },
    watch: {
      firstName: function (val) {
        this.fullName = val + ' ' + this.lastName
      },
      lastName: function (val) {
        this.fullName = this.firstName + ' ' + val
      }
    }
  }
</script>

<style>
  li.active {
    background: red;
  }
</style>
