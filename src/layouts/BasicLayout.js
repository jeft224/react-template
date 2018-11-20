import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import Routes from '../route';
import { Layout, Menu, Icon, Breadcrumb } from 'antd';
const {Content,Footer} = Layout
import SiderMenu from '../components/SiderMenu';
import Header from '../components/header/Header';
class BasicLayout extends Component {
    render(){
        return (
            <Layout style = {{minHeight:'100vh'}}>
                <SiderMenu/>
                <Layout>
                    <Header/>
                    <Content style={{margin:'16px 10px 0'}}>
                        <div style ={{background:'#fff',maxHeight:360,padding:24}}>
                            <Routes />
                            bill is cat
                        </div>
                    </Content>
                    <Footer style={{textAlign:'center'}}>
                        ant design @2018 created by ant ued
                    </Footer>
                </Layout>
                
            </Layout>
        )
    }
}

export default BasicLayout;

