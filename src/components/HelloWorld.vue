<template>
  <div class="hello">
     <hoc-button type="primary" @click="HOCclick">HOC Button</hoc-button>
  </div>
</template>

<script>
import HocButton from './hookButton.js'
export default {
  name: 'HelloWorld',
  components: {
    HocButton
  },
  props: {
    msg: String
  },
  methods: {
    HOCclick() {
      console.log('hoc click!')
    }
  }
}
</script>
