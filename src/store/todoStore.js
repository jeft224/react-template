import { observable, computed } from "mobx";

class ObservableTodoStore {
  @observable todos = [];

  @observable pendingRequests = 0;

  @computed get computedTodoStore() {
    return this.todos.filter(todo => todo.completed === true).length;
  }

  @computed get report() {
    if (this.todos.length === 0) return "<none>";
    return (
      `Next todo: "${this.todos[0].task}". ` +
      `Progress: ${this.computedTodoStore}/${this.todos.length}`
    );
  }

  addTodo(task) {
    this.todos.push({
      task,
      completed: false,
      assignee: null
    });
  }
}

const observableTodoStore = new ObservableTodoStore();

export default observableTodoStore;
