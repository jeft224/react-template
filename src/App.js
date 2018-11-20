import React,{ Component } from 'react';
import {observer} from 'mobx-react'
import './assets/style/app.less';
import todoStore from './store/todoStore';
import TodoList from './components/test-mobx-route/ TodoList';
import img from './assets/images/1.jpg';
import SlideMenu from './components/SiderMenu';
import Home from './views/Home';
import About from './views/About';
import Routes from './route';
import BasicLayout from './layouts/BasicLayout';
import { Provider } from 'mobx-react'
import {HashRouter as Router,Route,Switch} from 'react-router-dom'
// import Routes from '../route';
@observer
class App extends Component{
    render(){
        return (
            <Provider>
                <Router>
                    <BasicLayout/>
                </Router>
            </Provider>
        )
    }
}
export default App;