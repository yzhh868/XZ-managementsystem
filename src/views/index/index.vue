<template>
  <a-layout class="layout" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible>
      <div class="logo" >
        {{collapsed?'兴足':'兴足企业管理系统'}}
      </div>
      <a-menu theme="dark" :default-selected-keys="['1']" mode="inline">
        <a-sub-menu key="sub1">
          <span slot="title">
            <a-icon type="user" />
            <span>User</span>
          </span>
          <a-menu-item key="3">
            Tom
          </a-menu-item>
          <a-menu-item key="4">
            Bill
          </a-menu-item>
          <a-menu-item key="5">
            Alex
          </a-menu-item>
        </a-sub-menu>

        <a-menu-item key="1">
          <a-icon type="pie-chart" />
          <span>Option 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="desktop" />
          <span>Option 2</span>
        </a-menu-item>

        <a-sub-menu key="sub2">
          <span slot="title"><a-icon type="team" /><span>Team</span></span>
          <a-menu-item key="6">
            Team 1
          </a-menu-item>
          <a-menu-item key="8">
            Team 2
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item key="9">
          <a-icon type="file" />
          <span>File</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="flex  j-s" style="text-align: right; background: #53e5ec ; padding: 0; min-height: 8vh" >
        <a-dropdown style="margin-right: 25px">
          <a  class="ant-dropdown-link" @click="e => e.preventDefault()">
            <a-icon type="setting" />
            我 的 <a-icon type="down" />
          </a>
          <a-menu slot="overlay">
            <a-menu-item>
              <a href="javascript:;">
                <a-icon type="contacts" />
                个人信息</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">
                <a-icon type="lock" />
                修改密码</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">
                <a-icon type="logout" />
                退出登录</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>

      </a-layout-header>
      <a-layout-content >
        <div :style="{ padding: '24px', background: '#fff', minHeight: '70vh' }">
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  name:'index',
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>

<style>
.layout .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.logo{
  height: 32px;
  line-height: 32px;
  text-align: center;
  font-family: 楷体;
  letter-spacing: 2px;
  font-weight: bold;
  color: #ffffff;
}
.myhead{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  float:right;

}


</style>

