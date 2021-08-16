import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {TodosComponent} from "./components/todos/todos.component";
import {TodoEditorComponent} from "./components/todo-editor/todo-editor.component";

let routes: Routes = [
  {path: '', component: TodosComponent},
  {path: 'edit', component: TodoEditorComponent}

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
