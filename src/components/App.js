import React,{ Component } from 'react';
import {observer} from 'mobx-react'
import '../assets/style/app.less';
import todoStore from '../store/todoStore';
import TodoList from './ TodoList';
import img from '../assets/images/1.jpg';
@observer
class App extends Component{
    render(){
        return (
            <div className= "fontcolor" >
              
                hello react!!!!
                {/* <img src={img}/>
                <img src={require('../assets/images/1.jpg')}/> */}
                <TodoList store = {todoStore}/>
            </div>
        )
    }
}
export default App;