<template>
  <div>
    <h1>{{ msg }}</h1>
    <select @change="handleSelect" v-model="selectVal">
      <option
        v-for="item in optionValues"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        ></option>
    </select>
    <input v-model="iptVal" :placeholder="iptPlaceHolder"/>
  </div>
</template>

<script>
export default {
  name: 'select-input',
  props: {
    'optionValues': {
      'value': String,
      'label': String
    }
  },
  data () {
    return {
      msg: 'select-input',
      selectVal: '',
      iptVal: ''
    }
  },
  methods: {
    handleSelect () {
      console.log(this.selectVal)
      this.iptPlaceHolder = this.selectVal === 'value1' ? 'is value1' : 'is value2'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
