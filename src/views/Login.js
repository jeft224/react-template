import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox, Divider } from "antd";
import {withRouter} from 'react-router-dom';
import "../assets/style/login.less";
import logo from '../assets/images/logo.png'
const FormItem = Form.Item

class LoginForm extends Component {
  onsubmit = () => {
    this.props.form.validateFields((err,values) => {
      if(!err){
        this.props.history.push('/app/home')
      }
    })
  }
  render() {
    const { getFieldDecorator}=  this.props.form
    return (
      <div className="login-wrapper">
        <div className="logo-info">
          <img className="logo-img" src={logo} alt="logo"/>
          <h2>React Admin</h2>
        </div>
        <Form className="login-form" onSubmit={this.onsubmit}>
          <FormItem>
            {
              getFieldDecorator('username',{
                rules:[{required:true,message:'Please input your name'}]
              })(
                <Input prefix={<Icon type ="user" style ={{color:'rgba(0,0,0,.25)'}} placeholder="Username"/>}/>
              )
            }
          </FormItem>
          <FormItem>
            {
              getFieldDecorator('password',{
                rules:[{required:true,message:'Please input your password'}]
              })(
                <Input prefix={<Icon type ="lock" style ={{color:'rgba(0,0,0,.25)'}} placeholder="Password"/>}/>
              )
            }
          </FormItem>
          <FormItem>
            {
              getFieldDecorator('remember',{
                valuePropName:'checked',
                initialValue:true
              })(
                <Checkbox>Remember me</Checkbox>
              )
            }
            <a className ="login-form-forget" href="#">forget password</a>
            <Button type="primary" className="login-form-button" htmlType="submit">
              Login in
            </Button>
            Or <a href="#">register now!</a>
          </FormItem>
        </Form>
      </div>
    );
  }
}
const Login = Form.create()(LoginForm)
export default Login;
