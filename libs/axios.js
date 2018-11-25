import axios from 'axios'
import { message } from 'antd'

const Axios = axios.create({
    baseURL:'',
    timeout:50000,
    headers:{
        'Content-Type':'application/json;charset=utf-8'
    }
})
Axios.interceptors.request.use(config => {

},error => {
    
})
