import React, {Component} from 'react'
import routes from '../route/router.conf'
import { withRouter ,Link} from 'react-router-dom'
import { Layout, Menu,Icon} from 'antd';
const { Sider } = Layout;

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

@withRouter
class SiderMenu extends Component {
    state = {
        collapsed:false
    }
    // onSelect = ({path}) => { 

    //     const { location, history } = this.props
    //     // alert(location.pathname)
    //     if (location.pathname === path) return
    //     history.push(path)
    // }
    onCollapse = (collapsed) => {
        this.setState({
            collapsed
        })
    }
    render() {
        return (
            <Sider collapsible
                collapsed={this.state.collapsed}
                onCollapse ={this.onCollapse}>
                <div className = "logo">
                
                </div>
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