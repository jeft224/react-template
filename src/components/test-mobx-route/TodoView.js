import React, { Component } from 'react';
import {observer} from 'mobx-react'
@observer
class TodoView extends Component{
    onClickComputed = () =>{
        const todo = this.props.todo;
        todo.completed = !todo.completed;
    }
    onRename = () => {
        const todo = this.props.todo;
        todo.task = prompt('Task name', todo.task) || todo.task;
    }
    render(){
        const todo = this.props.todo;
        return (
            <li onDoubleClick = {this.onRename}>
                <input type ="checkbox" checked = {todo.completed} onChange={this.onClickComputed}/>
                { todo.task }
                { todo.assignee? <small>{ todo.assignee.name }</small>: null}
            </li>
        )
    }
}
export default TodoView;