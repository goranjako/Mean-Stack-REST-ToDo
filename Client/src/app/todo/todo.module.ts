import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [
TodoComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule, ReactiveFormsModule, SweetAlert2Module.forRoot(),NgxSpinnerModule,
    MDBBootstrapModule.forRoot(),HttpClientModule

  ]
})
export class TodoModule { }
