<template>
  <div id="base-Information">
    <menu>
      <menu-item v-for="item of this.menu">
        <img :src="item.img" slot="icon">
        <div slot="text">{{item.name}}</div>
      </menu-item>
    </menu>
  </div>
</template>

<script>
import menu from "../common/menu";
import menuItem from "../common/menuItem";
export default {
  name: "baseInformation",
  components: {
    menu,
    menuItem
  },
  data(){
    return{
      menu:[{name:'新增材料种类',img:'../assets/img/tabbar-buycar.png'},{name:'新增仓库'},{name:'新增产品规格'}]
    }
  }
}
</script>

<style scoped>

</style>
