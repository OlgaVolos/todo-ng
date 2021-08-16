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
  private key = 'todo'


  constructor() {

  }

  getAllTodos() {
    const storage = localStorage.getItem(this.key);
    return storage ? JSON.parse(storage) : this.todos
  }

  saveTodo(todo: ITodo) {
    const storage = localStorage.getItem(this.key);
    this.todos = storage ? JSON.parse(storage) : [];
    this.todos.push(todo);
    localStorage.setItem(this.key, JSON.stringify(this.todos))
  }


  deleteTodo(index: number) {
    this.todos.splice(index, 1);


  }

  deleteTodoFromLocalStorage(todo: ITodo) {
    let deleteTodo = JSON.parse(<string>localStorage.getItem('todo'));
    let indexToRemove = 0;
    deleteTodo.splice(indexToRemove, 1);
    localStorage.setItem('todo', JSON.stringify(deleteTodo))

  }
  updateTodo(index: number, updatedTodo: ITodo) {
    this.todos[index] = updatedTodo
  }
// updateTodo(todo: ITodo){
//     const storage = localStorage.getItem(this.key);
//    this.todos =  this.todos.includes(storage) ? this.todos:JSON.parse (storage)
// }

}
