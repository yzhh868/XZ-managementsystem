<template>
  <div class="menuitem" id="menuItem">
      <slot name="icon"></slot>
    <div class="myaline">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "menuItem"
}
</script>

<style scoped>
.menuitem{
  display: flex;
  flex-direction: row;
  text-align: center;
  font-size: 16px;
  width: 160px;
  height: 50px;

}

.menuitem img{
  height: 24px;
  width: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
.myaline{
  margin-left: 5px;
  margin-top: 5px;
}
</style>
