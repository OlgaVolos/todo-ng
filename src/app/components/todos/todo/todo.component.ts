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
  todoDeleteLift = new EventEmitter<number>();


  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }


  OnDeleteTodo(): void {
    this.todoDeleteLift.emit(this.todo.id);

  }

  editTodo(): void {
    this.router.navigate(['edit', this.todo.id])


  }


}
