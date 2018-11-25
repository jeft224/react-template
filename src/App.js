import React,{ Component } from 'react';
import {observer,Provider} from 'mobx-react'
import './assets/style/app.less';
import Routes from './route';
import BasicLayout from './layouts/BasicLayout';
import Login from './views/Login';
import {HashRouter as Router,Route,Switch} from 'react-router-dom'
// import Routes from '../route';
@observer
class App extends Component{
    render(){
        return (
            <Provider>
                <Router>
                    <Switch>
                        <Route exact path='/login' render={props => <Login {...props}/>}/>
                        <Route path='/' render ={props => <BasicLayout {...props}/>}/>
                    </Switch>
                    
                </Router>
            </Provider>
        )
    }
}
export default App;