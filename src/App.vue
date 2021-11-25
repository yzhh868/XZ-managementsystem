<template>
  <div id="app">
<!--    <modle-form/>-->
    <index/>
  </div>
</template>
<script>
import index from './views/index/index'
import modleForm from "./components/common/modleForm";
export default {
  name:'app',
  components:{
    index,
    modleForm
  },
  data(){
    return{

    }
  }
}
</script>

<style>
  @import "./assets/css/base.css";

</style>
