<template>
  <div id="components-form-demo-vuex">
    <a-form :form="form" @submit="handleSubmit">
      <a-form-item label="原材料编码">
        <a-input
          disabled="disabled"
          v-decorator="[
            'materialCode',
            validatorRules.inputValue
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
      validatorRules:{
        inputValue:{
          rules:[{required:true,message:'请输入原材料编码'}],
          initialValue:this.aaa
        }
      },
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
  created() {
    this.$nextTick(()=>{
      this.form.setFieldsValue({
        materialCode:this.codeMaterial
      })
    })
  },
  methods: {
    handleSubmit(e) {
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
    getTime(){
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
