import {Component, OnInit} from '@angular/core';
import {ITodo} from "../../interfaces";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {TodoService} from "../../services";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmComponent} from "../confirm/confirm.component";


@Component({
  selector: 'app-todo-editor',
  templateUrl: './todo-editor.component.html',
  styleUrls: ['./todo-editor.component.css']
})
export class TodoEditorComponent implements OnInit {
  editTodo: ITodo;
  editFormGroup: FormGroup


  constructor(private todoService: TodoService,
              private router: Router, private activatedRoute: ActivatedRoute,
              private matDialog: MatDialog) {
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
    this.matDialog.open(ConfirmComponent, {
      disableClose: true,
      data: 'Do you want to change?'
    }).afterClosed().subscribe(value => {
      if(value){
        this.todoService.saveTodo({...this.editTodo, ...this.editFormGroup.getRawValue()})
        this.router.navigate([''])
      }
    })
  }

  cancelEditTodo(): void {
    // console.log('cancel work');
    this.router.navigate([''])
  }

  deleteEditTodo(): void {
    this.matDialog.open(ConfirmComponent, {
      disableClose: true,
      data: "Do you want to delete?"
    }).afterClosed().subscribe(value => {
      if(value){
        this.todoService.deleteTodo(this.editTodo.id)
        console.log('delete work');
        this.router.navigate([''])
      }
    })
  }
}
