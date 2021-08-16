import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ITodo} from "../../../interfaces";
import {Router} from "@angular/router";
import {TodoService} from "../../../services/todo.service";


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input()
  todo: ITodo;

  @Output()
  todoDeleteLift = new EventEmitter<ITodo>();
  // @Output()
  // todoEditLift = new EventEmitter<ITodo>()




  constructor(private router: Router, private todoService:TodoService) {
  }

  ngOnInit(): void {
  }




  OnDeleteTodo() :void {
   this.todoDeleteLift.emit(this.todo);

  }

  editTodo() {
    this.router.navigate(['edit'], {state: this.todo} )
    // this.todoEditLift.emit(this.todo);
    localStorage.getItem('todo')


  }


}
