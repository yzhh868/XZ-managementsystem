<template>
  <div id="components-form-demo-vuex">
    <a-form :form="form" @submit="handleSubmit">
      <a-form-item label="原材料编码">
        <a-input
          disabled="disabled"
          v-decorator="[
            'materialCode',
            {
              rules:[{required:true, message:'请输入原材料编码'}]
            }
          ]"
        />
      </a-form-item>
      <a-form-item label="原材料分类">
        <a-select option.initialValue="主材料" style="width: 240px"
          v-decorator="[
            'materialTypes',
            {
              rules:[{required:true, message:'必选'}]
            }
          ]"
        >
          <a-select-option v-for="item in items" :key="item" :value="item">
            {{ item }}
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="规格型号">
        <a-input
          v-decorator="[
            'materialModle',
            {
              rules: [{ required: true, message: '请输入规格型号' }],
            },
          ]"
        />
      </a-form-item>
      <a-form-item label="材料单位">
        <a-input
          v-decorator="[
            'materialUnit',
            {
              rules: [{ required: true, message: '请输入材料单位!' }],
            },
          ]"
        />
      </a-form-item>
      <a-form-item label="单价">
        <a-input
          v-decorator="[
            'materialUnitPrice',
            {
              rules: [{ required: true, message: '请输入材料单价!' }],
            },
          ]"
        />
      </a-form-item>
      <a-button type="primary" html-type="submit">
        提交
      </a-button>
    </a-form>
  </div>
</template>

<script>
let index =0;
export default {
  data(){
    return{
        items:['主材料','副材料'],
        form:this.$form.createForm(this,{name:'advanced' }),
        aaa:'0001'
    }
  },
  computed: {
      codeMaterial(){
        let num=(Math.random()*9000)+1000;
        let code=parseInt(num);
        let time = this.getTime();

        return "XZ-"+time+"-"+code;
      }
  },
  created() {//用来自动生成原材料编码的代码块,create是vue创建前执行的
    this.$nextTick(()=>{//该方法的作用是在vue创建该页面以后，回调nextTick()实现处理默认数据的事情的
      this.form.setFieldsValue({
        materialCode:this.codeMaterial
      });
    });
  },
  methods: {
    handleSubmit(e) {//提交数据的代码块
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {

          console.log('Received values of form: ', values);
          this.$store.commit('update', values);
        }else{
          window.confirm('请输入全部选项')
        }
      });
    },
    getTime(){//获取当前时间的代码块，格式为YY-mm-dd--HH:mm
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth()+1<10 ? "0"+(date.getMonth()+1) : date.getMonth()+1;
      let day = date.getDay()<10 ? "0"+date.getDay() : date.getDay();
      let hour = date.getHours()<10 ? "0"+date.getHours() : date.getHours();
      let minutes = date.getMinutes()<10 ? "0"+date.getMinutes() :date.getMinutes();
      return year+"-"+month+"-"+day+"--"+hour+":"+minutes;
    }
  },
};
</script>
<style>
#components-form-demo-vuex .language-bash {
  max-width: 400px;
  border-radius: 6px;
  margin-top: 24px;
}
</style>
