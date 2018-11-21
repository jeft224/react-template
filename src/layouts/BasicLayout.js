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
    state = {
        leftCollapsedWidth:60,
        collapsedLeftSide:false,
    }
    onCollapsedLeftSide = () =>{
        const collapsedLeftSide = this.state.leftCollapsedWidth === 0 ? true :!this.state.collapsedLeftSide;
        console.log(this.state.collapsedLeftSide)
        this.setState({
            collapsedLeftSide,
            leftCollapsedWidth:60
        })
    }
    render(){
        const {collapsedLeftSide,leftCollapsedWidth} = this.state;
        return (
            <Layout style = {{minHeight:'100vh'}}>
                <Header onCollapsedLeftSide={this.onCollapsedLeftSide}
                        collasped={collapsedLeftSide}/>
                <Layout>
                    <SiderMenu collasped={collapsedLeftSide} leftCollapsedWidth={leftCollapsedWidth} onCollapse={this.onCollapsedLeftSide}/>
                    <Content style={{margin:'16px 10px 0',width:"100%"}}>
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

