import {Component, OnInit} from '@angular/core';
import {ITodo} from "../../interfaces";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {TodoService} from "../../services";


@Component({
  selector: 'app-todo-editor',
  templateUrl: './todo-editor.component.html',
  styleUrls: ['./todo-editor.component.css']
})
export class TodoEditorComponent implements OnInit {
  editTodo: ITodo;
  editFormGroup: FormGroup


  constructor(private todoService: TodoService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.editTodo = this.todoService.findById(+id)
    })
  }

  ngOnInit(): void {
    this.editFormGroup = new FormGroup({
      title: new FormControl(this.editTodo?.title, [Validators.required, Validators.minLength(1)]),
      description: new FormControl(this.editTodo?.description, [Validators.required, Validators.minLength(2)])
    })
    return this.editFormGroup.updateValueAndValidity()


  }

  changeEditTodo(): void {
    this.todoService.saveTodo({...this.editTodo, ...this.editFormGroup.getRawValue()})
    this.router.navigate([''])
    // console.log('change work');
  }

  cancelEditTodo(): void {
    // console.log('cancel work');
    this.router.navigate([''])
  }

  deleteEditTodo(): void {
    this.todoService.deleteTodo(this.editTodo.id)
    console.log('delete work');
    this.router.navigate([''])
  }
}
