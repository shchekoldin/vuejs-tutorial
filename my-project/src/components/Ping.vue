<template xmlns:v-bind="http://www.w3.org/1999/xhtml"
          xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div class="ping" v-bind:title="title">
    {{ message | toUpperCase }}
    <p v-if="seen">Now you see me {{ 1 + 1 + ' = 1 + 1' }}</p>
    <ol>
      <todo-item
        v-for="todo in todos"
        v-bind:todo="todo"
        v-bind:key="todo.id">
      </todo-item>
    </ol>
    <button v-on:click="reverseMessage">Reverse Message</button>
    <form v-on:submit.prevent="onSubmit">
      <input v-model="message">
      <button type="submit" v-bind:disabled="isButtonDisabled">Button</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'ping',
    message: 'Ping!',
    data () {
      const data = {
        message: 'ping!',
        title: 'test',
        seen: true,
        isButtonDisabled: false,
        todos: [
          {
            id: 1,
            text: 'Learn Vue'
          }
        ]
      }

      setInterval(() => (data.title = Math.random()), 1000)

      return data
    },
    methods: {
      reverseMessage () {
        this.message = this.message.split('').reverse().join('')
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
    }
  }
</script>
