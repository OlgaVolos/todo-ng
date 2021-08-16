import {Injectable} from '@angular/core';
import {ITodo} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: ITodo[] = [];
  todo: ITodo


  constructor() {

  }

  getAllTodos() {
    return this.todos
  }

  saveTodo(todo: ITodo) {
    this.todos.push(todo)
  }

  // addTodoToLocalStorage(todo: ITodo){
  //   if(localStorage.getItem('todo')){
  //     this.todos = [...this.todos, todo];
  //   }else {
  //    this.todos = JSON.parse(<string>localStorage.getItem('todo'))
  //   }
  // }

  addTodoToLocalStorage(todo: ITodo) {
    let todosArray = []
    if (localStorage.getItem('todo')) {
      todosArray = JSON.parse(<string>localStorage.getItem('todo'));
      todosArray = [...todosArray, todo]
    } else {
      todosArray = [todo]
    }
    localStorage.setItem('todo', JSON.stringify(todo))
  }
  deleteTodo(index: number){
    this.todos.splice(index, 1)

  }
  editTodo(index: number, editedTodo: ITodo){
    this.todos[index] = editedTodo

  }
}
