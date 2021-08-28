import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TodosComponent} from './components/todos/todos.component';
import {TodoComponent} from './components/todos/todo/todo.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from "./app-routing.module";
import {TodoEditorComponent} from './components/todo-editor/todo-editor.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./components/material/material.module";
import { ConfirmComponent } from './components/confirm/confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoComponent,
    TodoEditorComponent,
    ConfirmComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],


})
export class AppModule {
}
