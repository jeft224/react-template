import React, { Component } from 'react';
import { Layout,Icon,Dropdown,Avatar,Menu} from 'antd';
const {Header} = Layout
import {observer} from 'mobx-react'
import './header.less'
@observer
class RHeader extends Component{
    
    render() {
        const menu = (
            <Menu>
                <Menu.Item>
                    <Icon type="logout"/>
                    个人中心
                </Menu.Item>
                <Menu.Item>
                    <Icon type="user"/>
                    个人设置
                </Menu.Item>
                <Menu.Divider/>
                <Menu.Item>
                    <Icon type="logout"/>
                    退出登录
                </Menu.Item>
            </Menu>
        )
        return (
            <Header className="header-icon">
                <Dropdown overlay = {menu} placement = "bottomCenter" style ={{float:'right'}}>
                    <a className ="ant-drop-link" href ="#">
                        <Avatar icon="user"/>
                          Root
                    </a>
                </Dropdown>
            </Header>
        )
    }
}

export default RHeader;