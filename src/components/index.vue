<!--
 * @Author: jack
 * @Date: 2021-12-03 10:34:04
 * @LastEditors: g05047
 * @LastEditTime: 2021-12-03 16:11:07
 * @Description: create
-->
<template>
  <div class="poem">
    <div class="print">
      <typewriter class="tl" ref="typewriter" :interval="50" :style="{visibility: status}">
        <div class="comments">
          <start/>
        </div>
      </typewriter>
    </div>
  </div>
  
</template>

<script>
import typewriter from 'vue-type-writer' //print
import Start from "./start.vue"

export default {
  name: 'poem',
  components: { typewriter, Start},
  data () {
    return {
      status: 'hidden'
    }
  },
  mounted(){
    this.type()
  },
  methods: {
     // $emit
     type () {
       this.status = 'visible'
       this.$refs.typewriter.$emit('typewrite')
     }
  }
}
</script>

<style scoped>
.poem{
  padding-top: 100px;
  height: 500px;
  background: url(../assets/img/bg.jpg) 100% 100%;
}
</style>
