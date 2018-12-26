import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { Layout, Menu, Icon, Select } from "antd";
import "../assets/style/sidermenu.less";
import cx from "classnames";
import routes from "../route/router.conf";
import checkPermission from "../../libs/checkPermission";

const { Sider } = Layout;

const renderMenuItem = item => (
  <Menu.Item key={item.path}>
    <Link to={item.path}>
      {item.icon && <Icon type={item.icon} />}
      <span className="nav-text">{item.title}</span>
    </Link>
  </Menu.Item>
);
const renderSubMenu = item => (
  <Menu.SubMenu
    key={item.path}
    title={
      <span>
        {item.icon && <Icon type={item.icon} />}
        <span className="nav-text">{item.title}</span>
      </span>
    }
  >
    {item.subs && item.subs.map(item => renderMenuItem(item, auth))}
  </Menu.SubMenu>
);

@withRouter
class SiderMenu extends Component {
  // onSelect = ({path}) => {

  //     const { location, history } = this.props
  //     // alert(location.pathname)
  //     if (location.pathname === path) return
  //     history.push(path)
  // }
  render() {
    const {
      collapsed,
      onCollapse,
      leftCollapsedWidth,
      showHeader,
      auth
    } = this.props;
    const classnames = cx("sidebar-left", "sidebar-default", {
      "sidebar-left-sm": collapsed,
      showheader: collapsed ? false : showHeader,
      "sidebar-left-close": leftCollapsedWidth == 0
    });
    return (
      <Sider
        collapsible
        width={230}
        className={classnames}
        collapsedWidth={leftCollapsedWidth + 0.1}
        breakpoint="lg"
        trigger={null}
        collapsed={collapsed}
        onCollapse={onCollapse}
      >
        <div className="sider-menu-box">
          <div className="userinfo clearfix">
            <Icon type="woman" />
            <div className="user-details">
              <span>徐嘉欣</span>
              <div className="dropdown">
                <Select
                  size="small"
                  defaultValue="online"
                  dropdownClassName="sidebar-header-dropdown"
                >
                  <Select.Option value="online">
                    <span className="user online" />
                    在线
                  </Select.Option>
                  <Select.Option value="busy">
                    <span className="user busy" />
                    忙碌
                  </Select.Option>
                  <Select.Option value="invisible">
                    <span className="user invisible" />
                    隐身
                  </Select.Option>
                  <Select.Option value="offline">
                    <span className="user offline" />
                    离线
                  </Select.Option>
                </Select>
              </div>
            </div>
          </div>
        </div>
        <Menu mode="inline" theme="dark">
          {routes.menus &&
            routes.menus.map(item =>
              item.subs && checkPermission(auth, item.permissions)
                ? renderSubMenu(item)
                : renderMenuItem(item)
            )}
        </Menu>
      </Sider>
    );
  }
}

export default SiderMenu;
