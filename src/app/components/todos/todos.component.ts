import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {ITodo} from "../../interfaces";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {TodoService} from "../../services";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmComponent} from "../confirm/confirm.component";

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

  constructor(private todoService: TodoService, private modalService: NgbModal, private matDialog: MatDialog) {
  }

  ngOnInit(): void {
    this.todos = this.todoService.getAllTodos();
  }

  save(): void {
    this.todoService.saveTodo(this.myFormGroup.value);
    this.ngOnInit();
    this.myFormGroup.reset();

  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${TodosComponent.getDismissReason(reason)}`;
    });
  }

  private static getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  delete(id: number): void {
    this.matDialog.open(ConfirmComponent, {
      disableClose: true,
      data: 'Do you want to delete?'
    }).afterClosed().subscribe(value => {
      if(value){
        this.todoService.deleteTodo(id);
        this.ngOnInit()
      }
    })
  }


}
