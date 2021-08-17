import {Injectable} from '@angular/core';
import {ITodo} from "../interfaces";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todo: ITodo;
  myFormGroup: FormGroup;
  private key = 'todo'


  constructor() {

  }

  getAllTodos() : ITodo[] {
    const storage = localStorage.getItem(this.key);
    return storage ? JSON.parse(storage) : []
  }

  saveTodo(todo: ITodo) :void {
    const todos = this.getAllTodos();
    if (!todo.id){
      const lastTodo = todos[todos.length - 1];
      todo.id = lastTodo ? lastTodo.id + 1 : 1
      todos.push(todo)
    } else {
      let editTodo = todos.find(value => value.id === todo.id);
      Object.assign(editTodo, todo)
    }
   localStorage.setItem(this.key, JSON.stringify(todos))
  }


  deleteTodo(id: number): void {
    const todos = this.getAllTodos();
    localStorage.setItem(this.key, JSON.stringify(todos.filter(value => value.id !== id)))

  }
  findById(id: number): ITodo {
    const todos = this.getAllTodos();
    return todos.find(value => value.id ===id) as ITodo;
  }



}
