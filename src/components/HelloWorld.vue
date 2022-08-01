<template>
  <div class="hello">
    <Smothie/>
  </div>
</template>

<script>
import Smothie from '../assets/icons/smothie.svg'

export default {
  name: 'HelloWorld',
  components: {
    Smothie
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  a {
  color: @pink;
}
}
</style>
