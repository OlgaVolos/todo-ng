import {Component, Input, OnInit} from '@angular/core';
import {ITodo} from "../../interfaces";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-todo-editor',
  templateUrl: './todo-editor.component.html',
  styleUrls: ['./todo-editor.component.css']
})
export class TodoEditorComponent implements OnInit {
  @Input()
  editTodo: ITodo[];
  titleControl = new FormControl('', [Validators.required, Validators.minLength(2)])
  descriptionControl = new FormControl('', [Validators.required, Validators.minLength(2)])
  editFormGroup: FormGroup = new FormGroup({
    title: this.titleControl,
    description: this.descriptionControl
  });


  constructor() {}

  ngOnInit(): void {


  }

}
