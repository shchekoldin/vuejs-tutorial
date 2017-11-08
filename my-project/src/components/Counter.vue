<template>
  <div>
    <div id="example-1">
      <button v-on:click="counter += 1">Add 1</button>
      <p>The button above has been clicked {{ counter }} times.</p>
    </div>

    <div class="space"></div>

    <div id="example-3">
      <button v-on:click="say('hi')">Say hi</button>
      <button v-on:click="say('what')">Say what</button>
    </div>

    <div class="space"></div>

    <button v-on:click.once="warn('Form cannot be submitted yet.', $event)">
      Submit
    </button>

    <div class="space"></div>

    <input @keyup.enter="submit">

    <!-- Alt + C -->
    <input @keyup.alt.67="submit">

    <!-- Alt + Click -->
    <button @click.alt="submit">Do something</button>
  </div>
</template>

<script>
  export default {
    name: 'counter',
    data () {
      return {
        counter: 0
      }
    },
    methods: {
      say: function (message) {
        alert(message)
      },
      warn: function (message, event) {
        console.log(event)
        // now we have access to the native event
        if (event) event.preventDefault()
        alert(message)
      },
      submit: () => {
        console.log('submit')
      }
    }
  }
</script>

<style>
  .space {
    border-bottom: 1px #aaa solid;
    margin: 1em 0;
  }
</style>
