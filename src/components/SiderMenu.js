import React, {Component} from 'react'
import routes from '../route/router.conf'
import { withRouter ,Link} from 'react-router-dom'
import { Layout, Menu,Icon,Select} from 'antd';
const { Sider } = Layout;
import '../assets/style/sidermenu.less';
import cx from 'classnames';

const renderMenuItem = (item) => (
    <Menu.Item key={item.path}>
        <Link to={item.path}>   
            {item.icon && <Icon type={item.icon} />}
            <span className="nav-text">{item.title}</span>
        </Link>
    </Menu.Item>
)
const renderSubMenu = (item) => (
    <Menu.SubMenu
        key={item.path}
        title={
            <span>
                {item.icon && <Icon type={item.icon} />}
                <span className="nav-text">{item.title}</span>
            </span>
        }
    >
    {item.subs.map(item => renderMenuItem(item))}
    </Menu.SubMenu>
)

// @withRouter
class SiderMenu extends Component {
    // onSelect = ({path}) => { 

    //     const { location, history } = this.props
    //     // alert(location.pathname)
    //     if (location.pathname === path) return
    //     history.push(path)
    // }
    state ={
        collapsed:false
    }
    onCollapse =() => {
        this.setState({
            collapsed:!this.state.collapsed
        })
    }
    render() {
        const {collapsed,onCollapse,leftCollapsedWidth} = this.props;
        return (
            <Sider collapsible width ={230}
                collapsedWidth={leftCollapsedWidth+0.1}
                breakpoint='lg'
                trigger={null}
                collapsed={collapsed}
                onCollapse ={onCollapse}>
                {/* <div className = "sider-menu-box">
                    <div className ="userinfo clearfix">
                        <Icon type ="woman"/>
                        <div className ="user-details">
                            <span>徐嘉欣</span>
                            <div className="dropdown">
                                <Select size ="small" defaultValue ='online' dropdownClassName="sidebar-header-dropdown">
                                    <Select.Option value="online">
                                        <span className="user online"></span>
                                        在线
                                    </Select.Option>
                                    <Select.Option value="busy">
                                        <span className="user busy"></span>
                                        忙碌
                                    </Select.Option>
                                    <Select.Option value="invisible">
                                        <span className="user invisible"></span>
                                        隐身
                                    </Select.Option>
                                    <Select.Option value="offline">
                                        <span className="user offline"></span>
                                        离线
                                    </Select.Option>
                                </Select>
                            </div>
                        </div>
                    </div>
                </div> */}
                <Menu mode = "inline" theme ='dark'>
                    {
                        routes.menus && routes.menus.map(item =>
                            item.subs ? renderSubMenu(item) : renderMenuItem(item))
                    }
                </Menu>
            </Sider>
        )
    }
}

export default SiderMenu;