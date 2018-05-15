<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <select-input :optionValues='optionValues'></select-input>
  </div>
</template>

<script>
import selectInput from './select-input.vue'

export default {
  components: {
    'select-input': selectInput
  },
  data () {
    return {
      msg: 'myList',
      optionValues: [{
        label: '请选择',
        value: ''
      }, {
        label: 'label1',
        value: 'value1'
      }, {
        label: 'label2',
        value: 'value2'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
