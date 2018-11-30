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

Axios.interceptors.response.use(response => {
    if(response.data == undefined){
        data = response.request.responseText
    } else { 
        data = response.data
    }
    return data;
},error => {
    if (error && error.response){
        return Promise.reject(error)
    }
})


export default function axios(){

}