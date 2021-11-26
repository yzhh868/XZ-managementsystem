<template>
  <div id="components-form-demo-advanced-search">
    <a-form class="ant-advanced-search-form" :form="form" @submit="handleSearch">
      <a-row :gutter="24">
        <a-col :span="12">
          <a-form-item lable="wareCode">
            <span style="font-weight: bold;font-family: 宋体;">仓库编码</span>
            <a-input v-decorator="[
              'wareCode',
              {
                rules:[
                  {
                    required:true,
                    message:'仓库编码必填',
                  },
                ],
              },
            ]"
                     placeholder="请输入仓库编号"/>
          </a-form-item>
          <a-form-item lable="wareCode">
            <span style="font-weight: bold;font-family: 宋体;">仓库名称</span>
            <a-input v-decorator="[
              'wareName',//这是form数据的对象名
              {
                rules:[
                  {
                    required:true,
                    message:'仓库名称必填',
                  },
                ],
              },
            ]"
                     placeholder="仓库名称"/>
          </a-form-item>
          <a-form-item lable="wareCode">
            <span style="font-weight: bold;font-family: 宋体;">仓库位置</span>
            <a-input v-decorator="[
              'warePosition',
              {
                rules:[
                  {
                    required:true,
                    message:'仓库位置必填',
                  },
                ],
              },
            ]"
                     placeholder="请输入仓库位置"/>
          </a-form-item>
        </a-col>

      </a-row>





      <a-row>
        <a-col :span="24" :style="{ textAlign: 'right' }">
          <a-button type="primary" html-type="submit">
            提交
          </a-button>
          <a-button :style="{ marginLeft: '8px' }" @click="handleReset">
            重置
          </a-button>
        </a-col>
      </a-row>
    </a-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      expand: false,
      form: this.$form.createForm(this, { name: 'advanced_search' }),
    };
  },
  computed: {

  },
  updated() {
    console.log('updated');
  },
  methods: {
    handleSearch(e) {
      e.preventDefault();
      this.form.validateFields((error, values) => {//用来判断验证输入项目是否有空值
        if (error){
          window.confirm("请输入全部项目。点击“确定”继续！")
          console.log('error', error);
        }else {
          console.log('Received values of form: ', values);
        }
      });
    },

    handleReset() {
      this.form.resetFields();
    },

    toggle() {
      this.expand = !this.expand;
    },
  },
};
</script>
<style>
.ant-advanced-search-form {
  padding: 24px;
  background: #fbfbfb;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
}

.ant-advanced-search-form .ant-form-item {
  display: flex;
}

.ant-advanced-search-form .ant-form-item-control-wrapper {
  flex: 1;
}

#components-form-demo-advanced-search .ant-form {

  width: 100%;
  height: 100%;
  max-width: 125vh;
  max-height: 125vh;

}
#components-form-demo-advanced-search .search-result-list {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
}
</style>
