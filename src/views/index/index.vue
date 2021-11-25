<template>
  <a-layout class="layout" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible>
      <div class="logo" >
        {{collapsed?'兴足':'兴足企业管理系统'}}
      </div>
      <a-menu theme="dark" :default-selected-keys="['1']" mode="inline">
        <a-sub-menu key="sub1">
          <span slot="title">
            <a-icon type="folder" />
            <router-link to="/baseInformation" replace>
              <span>基础信息管理</span>
            </router-link>
          </span>
          <a-menu-item key="1-1">
            新增原材料种类
          </a-menu-item>
          <a-menu-item key="1-2">
            <router-link to="/addWarehouse" replace>新增仓库</router-link>
          </a-menu-item>
          <a-menu-item key="1-3">
            新增产品规格
          </a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="sub2">
          <span slot="title">
            <a-icon type="folder" />
            <span>材料管理</span>
          </span>
          <a-menu-item key="2-1">
            新增原材料
          </a-menu-item>
          <a-menu-item key="2-2">
            原材料列表
          </a-menu-item>
          <a-menu-item key="2-3">
            原材料采购申请
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub3">
          <span slot="title">
            <a-icon type="folder" />
            <span>仓库管理</span>
          </span>
          <a-menu-item key="3-1">
            原材料入库
          </a-menu-item>
          <a-menu-item key="3-2">
            产品入库
          </a-menu-item>
          <a-menu-item key="3-3">
            原材料入库统计
          </a-menu-item>
          <a-menu-item key="3-4">
            产品入库统计
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub4">
            <span slot="title">
              <a-icon type="folder" />
              <span>财务管理</span>
          </span>
        </a-sub-menu>
        <a-sub-menu key="sub5">
          <span slot="title">
            <a-icon type="folder" />
            <span>生产管理</span>
          </span>
          <a-menu-item key="5-1">
            产品规格型号查看
          </a-menu-item>
          <a-menu-item key="5-2">
            产品生产数量上报
          </a-menu-item>
          <a-menu-item key="5-3">
            产品包装数量上报
          </a-menu-item>
          <a-menu-item key="5-4">
            生产产品上报统计表
          </a-menu-item>
          <a-menu-item key="5-5">
            包装产品上报统计表
          </a-menu-item>
        </a-sub-menu>

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
      menuShow:false,
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

