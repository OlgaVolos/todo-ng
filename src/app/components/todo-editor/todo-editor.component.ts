import {Component, OnInit} from '@angular/core';
import {ITodo} from "../../interfaces";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TodoService} from "../../services/todo.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-todo-editor',
  templateUrl: './todo-editor.component.html',
  styleUrls: ['./todo-editor.component.css']
})
export class TodoEditorComponent implements OnInit {
  editTodo: ITodo;



  editFormGroup: FormGroup


  constructor(private todoService:TodoService, private router:Router)  {
    this.editTodo = this.router.getCurrentNavigation()?.extras.state as ITodo;

  }

  ngOnInit(): void {
   this.editFormGroup = new FormGroup({
     title: new FormControl(this.editTodo.title, [Validators.required, Validators.minLength(2)]),
     description: new FormControl(this.editTodo.description, [Validators.required, Validators.minLength(2)])
   })
   return this.editFormGroup.updateValueAndValidity()


  }

  changeEditTodo(editTodo: ITodo) {
    // if(this.editFormGroup.invalid) return;
    // this.editTodo = this.editFormGroup.value

    this.router.navigate([''])
  }

  cancelEditTodo() {

    this.router.navigate([''])

  }

  deleteEditTodo() {

    console.log('delete work');
    this.router.navigate([''])

  }
}
