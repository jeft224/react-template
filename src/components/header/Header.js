import React, { Component } from 'react';
import { Layout,Menu,Icon,Dropdown,Avatar} from 'antd';
const {Header} = Layout
class RHeader extends Component{
    renderMenu = ()=> (
        <Menu>
            <Menu.item>
                <span>
                    <Icon type ="logout"/>
                    个人中心
                </span>
            </Menu.item>
            <Menu.item>
                <span>
                    <Icon type ="user"/>
                    个人设置
                </span>
            </Menu.item>
            <Menu.Divider/>
            <Menu.item>
                <span>
                    <Icon type ="logout"/>
                    退出登录
                </span>
            </Menu.item>
        </Menu>
    )
    render(){
        return (
            <Header style ={{background:'#fff',padding:0,boxShadow:'0px 1px 4px rgba(0,21,41,.08)'}}>
                <Dropdown overlay = {this.renderMenu} placement = "bottomCenter">
                    <Avatar icon ="user"/>
                </Dropdown>
            </Header>
        )
    }
}

export default RHeader;