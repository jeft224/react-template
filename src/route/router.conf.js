export default {
    menus: [ //菜单相关路由
        { path:'/app/home',title:'首页',icon:'',component:'Home',exact:true,},
        {
          path:'/app/Loan',title:'贷超',icon:'',exact:false,
          subs:[
            {path:'/app/Loan/about',title:'清单',icon:'',component:'About',exact:false},
          ]
        }
    ],
    other:[]
}