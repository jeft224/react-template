const Mock = require('mockjs')

class Login {
    constructor(){
        
    }
    login(options){
        const {username,password} = req.options;
        if(!username || !password){
            return {
                code:400,
                error:'用户名或密码错误',
                data:[]
            }
        }else{
            return Mock.mock({
                'username':'admin',
                'name':'abert',// 昵称
            })
        }
    }
}
const login = new Login();
module.exports = login