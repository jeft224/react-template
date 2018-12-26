import React, { Component } from "react";
// import PropTypes from 'prop-types';
// import cx from 'classnames';
import { Layout, Menu, Icon, Breadcrumb } from "antd";
import Routes from "../route";
import SiderMenu from "../components/SiderMenu";
import Header from "../components/header/Header";

const { Content, Footer } = Layout;

class BasicLayout extends Component {
  state = {
    leftCollapsedWidth: 60,
    collapsedLeftSide: false, // 隐藏左侧侧边栏
    showSideBarHeader: true, // 隐藏菜单中的信息模块
    auth: "user"
  };

  /**
   * 用于隐藏左侧侧边栏
   *
   * @memberof BasicLayout
   */
  onCollapsedLeftSide = () => {
    const collapsedLeftSide =
      this.state.leftCollapsedWidth === 0
        ? true
        : !this.state.collapsedLeftSide;
    console.log(this.state.collapsedLeftSide);
    this.setState({
      collapsedLeftSide,
      leftCollapsedWidth: 60
    });
  };

  /**
   *
   *用于隐藏自己的在线信息
   * @memberof BasicLayout
   */
  toggleSideBarHeader = () => {
    this.setState({
      showSideBarHeader: !this.state.showSideBarHeader
    });
  };

  render() {
    const {
      collapsedLeftSide,
      leftCollapsedWidth,
      showSideBarHeader,
      auth
    } = this.state;
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Header
          onCollapsedLeftSide={this.onCollapsedLeftSide}
          collapsed={collapsedLeftSide}
          toggleSideBarHeader={this.toggleSideBarHeader}
        />
        <Layout>
          <SiderMenu
            collapsed={collapsedLeftSide}
            showHeader={showSideBarHeader}
            leftCollapsedWidth={leftCollapsedWidth}
            onCollapse={this.onCollapsedLeftSide}
            auth={auth}
          />
          <Layout>
            <Content style={{ margin: "16px 10px 0" }}>
              <div style={{ background: "#fff", maxHeight: 360, padding: 24 }}>
                <Routes auth={auth} />
                bill is cat
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              used ant design ui created by ant abert @2018
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default BasicLayout;
