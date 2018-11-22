import React, { Component } from 'react';
import { Layout,Icon,Dropdown,Avatar,Menu} from 'antd';
import { Link } from 'react-router-dom';
import {observer} from 'mobx-react'
import './header.less'
import logo from '../../assets/images/1.jpg'
import cx from 'classnames';

const {Header} = Layout
@observer
class RHeader extends Component{
    
    render() {
        const {onCollapsedLeftSide,collapsed} = this.props
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
        const classnames = cx('navbar-brand',{
            'navbar-brand-show':collapsed
        })
        return (
            <Header className="header-icon" >
                <div className ="navbar-branding">
                    <Link className="navbar-brand" to="/" className={classnames}>
                        <img src={logo} alt="logo"/>
                        <b>React</b>
                        Admin
                    </Link>
                    <span className="toggle_sidermenu_1" onClick={onCollapsedLeftSide}>
                        <Icon type="menu-fold"></Icon>
                    </span>
                </div>
                <ul className="navmenu">

                </ul>
                <div className="nav-list">
                    <Dropdown overlay = {menu} placement = "bottomCenter" style ={{float:'right'}}>
                        <a className ="ant-drop-link" href ="#">
                            <Avatar icon="user"/>
                        </a>
                    </Dropdown>
                </div>
                
            </Header>
        )
    }
}

export default RHeader;