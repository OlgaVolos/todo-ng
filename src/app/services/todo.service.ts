import {Injectable} from '@angular/core';
import {ITodo} from "../interfaces";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: ITodo[] = [];
  todo: ITodo;
  myFormGroup: FormGroup;


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
    const todoForDelete = this.todos.splice(index, 1);
    // localStorage.removeItem(todo(index))

  }
  deleteTodoFromLocalStorage(todo: ITodo){
    let deleteTodo = JSON.parse(<string>localStorage.getItem('todo'));
    let indexToRemove = 0;
    deleteTodo.splice(indexToRemove, 1);
    localStorage.setItem('todo', JSON.stringify(deleteTodo))

  }

  editTodo(index: number, editedTodo: ITodo){
    this.todos[index] = editedTodo;

  }

}
