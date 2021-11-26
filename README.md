# managesystem

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
### 项目制作计划
```
   我是一名初学者，第一次做全栈项目，想挑战一下自己，同事检验自己对前端和后端知识所掌握的程度，在项目中使自己
   能够发现以前自己发现不了的问题，如果有大神，无意间光临寒舍，希望能够针对我在做项目使遇到的问题不吝赐教。
   项目制作我想分为这几个步骤：
   1、先采用vue搭建前端页面
   2、使用springBoot，mybatis写后端api
   3、整合项目
   4、做测试
   5、部署发布
```

### 项目进行时遇到的暂未解决的问题
```
    1、在前端搭时，我采用的是vue+antdv，在antdv中的form表单的使用中，有几个处理方法不太明白，
    分别是：
      （1）data() {
             return {
                form: this.$form.createForm(this, { name: 'advanced_search' }),
                //这个地方不知道的封装的数据形式是啥样子的
              };
          }
           this.form.validateFields((error, values) => {//这个用来做表单为空判断方法的里面的
           参数不太懂
      （2）
          beforeCreate() {
              this.form = this.$form.createForm(this, { name: 'dynamic_form_item' });
              this.form.getFieldDecorator('keys', { initialValue: [], preserve: true });
           },
           这里的beforeCreate（）函数的作用不太明白，以及里面的代码内容，
```
### 项目的进度
```
   1、 目前项目正在前端搭建阶段
```
