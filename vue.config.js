// 配置文件的路径别名

module.exports={
    configureWebpack:{
        resolve:{
           alias:{
               'assets':'@/assets',
               'common':'@/common',
               'components':'@/components',
               'network':'@/network',
               'views':'@/views',
           }
        }
    },
  chainWebpack : config=>{
    config.plugin('html').tap(args =>{
      args[0].title="兴足"
      return args
    })
  }

}
