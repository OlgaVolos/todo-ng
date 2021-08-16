import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ITodo} from "../../../interfaces";
import {Router} from "@angular/router";

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
  @Output()
  todoEditLift = new EventEmitter<ITodo>()



  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  OnDeleteTodo() :void {
   this.todoDeleteLift.emit(this.todo)

  }

  editTodo() {
    this.router.navigate(['edit'], {state: this.todo} )
    // this.todoEditLift.emit(this.todo);


  }
}
