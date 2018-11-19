import React,{ Component } from 'react';
import {observer} from 'mobx-react'
import '../assets/style/app.less';
import todoStore from '../store/todoStore';
import TodoList from './ TodoList';
import img from '../assets/images/1.jpg';
import SlideMenu from './slideMenu';
import Home from '../components/Home';
import About from '../components/About';
import Routes from '../route';
import { Provider } from 'mobx-react'
import {HashRouter as Router,Route,Switch} from 'react-router-dom'
// import Routes from '../route';
@observer
class App extends Component{
    render(){
        return (
            <Provider>
                <Router>
                    
                    <div className= "fontcolor" >
                    
                        {/* hello react!!!!
                        <img src={img}/>
                        <img src={require('../assets/images/1.jpg')}/>
                        <TodoList store = {todoStore}/> */}
                        <Routes />
                        <SlideMenu/>
                        {/* <Switch>
                            <Route exact path ="/app/home" component ={Home}></Route>
                            <Route path ="/app/Loan/about" component ={About}></Route>
                        </Switch> */}
                    </div>
                </Router>
            </Provider>
            
        )
    }
}
export default App;