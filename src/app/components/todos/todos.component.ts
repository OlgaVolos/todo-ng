import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {ITodo} from "../../interfaces";
import {TodoService} from "../../services/todo.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: ITodo[];
  todo: ITodo;
  closeResult = '';
  private content: any

  titleControl = new FormControl('', [Validators.required, Validators.minLength(2)])
  descriptionControl = new FormControl('', [Validators.required, Validators.minLength(2)])
  myFormGroup: FormGroup = new FormGroup({
    title: this.titleControl,
    description: this.descriptionControl
  });
  form: NgForm;

  constructor(private todoService: TodoService, private modalService: NgbModal ) {
  }

  ngOnInit(): void {
    this.todos = this.todoService.getAllTodos();
  }

  save(todo: ITodo) {
    this.todoService.saveTodo(this.myFormGroup.value);

    this.todo = Object.assign(this.todos, this.myFormGroup.value)
    localStorage.setItem('todo', JSON.stringify(this.todos))
    this.todoService.addTodoToLocalStorage(this.todo)
    this.myFormGroup.reset()

  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  deleteTodo(todo: ITodo): void {
    const index = this.todos.indexOf(todo);
    this.todoService.deleteTodo(index)
  }

  editTodo(todo: ITodo): void {
    const index = this.todos.indexOf(todo);
    this.todoService.editTodo(index, todo);


  }
}
