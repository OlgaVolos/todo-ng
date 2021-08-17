import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {ITodo} from "../../interfaces";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {TodoService} from "../../services";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: ITodo[];
  todo: ITodo;
  closeResult = '';

  titleControl = new FormControl('', [Validators.required, Validators.minLength(1)])
  descriptionControl = new FormControl('', [Validators.required, Validators.minLength(2)])
  myFormGroup: FormGroup = new FormGroup({
    title: this.titleControl,
    description: this.descriptionControl
  });
  form: NgForm;

  constructor(private todoService: TodoService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.todos = this.todoService.getAllTodos();
  }

  save(): void {
    this.todoService.saveTodo(this.myFormGroup.value);
    this.todos = this.todoService.getAllTodos()
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

  delete(id: number): void {
    this.todoService.deleteTodo(id);
    this.ngOnInit()


  }


}
