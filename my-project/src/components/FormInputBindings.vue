<template>
  <div>
    <div>
      <input v-model.lazy.trim="message" placeholder="edit me">
      <p>Message is: {{ message }}</p>
    </div>

    <div>
      <span>Multiline message is:</span>
      <p style="white-space: pre-line;">{{ message }}</p>
      <br>
      <textarea v-model="message" placeholder="add multiple lines"></textarea>
    </div>

    <div>
      <input type="checkbox" id="checkbox" v-model="checked">
      <label for="checkbox">{{ checked }}</label>
    </div>

    <div id='example-3'>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames">
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
      <label for="mike">Mike</label>
      <br>
      <span>Checked names: {{ checkedNames }}</span>
    </div>

    <div>
      <input type="radio" id="one" value="One" v-model="picked">
      <label for="one">One</label>
      <br>
      <input type="radio" id="two" value="Two" v-model="picked">
      <label for="two">Two</label>
      <br>
      <span>Picked: {{ picked }}</span>
    </div>

    <div>
      <select v-model="selected">
        <option disabled value="">Please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <span>Selected: {{ selected }}</span>
    </div>

    <div>
      <input
        type="checkbox"
        v-model="toggle"
        v-bind:true-value="a"
        v-bind:false-value="b()"
      >
      <span>{{ toggle }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        message: 'Welcome!',
        checked: true,
        checkedNames: ['Mike'],
        picked: 'One',
        selected: '',
        toggle: false,
        a: 'X'
      }
    },
    methods: {
      b () {
        return 2
      }
    }
  }
</script>
