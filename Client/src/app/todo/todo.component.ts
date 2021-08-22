import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { map } from 'rxjs/operators';
import { Sweetalert2Service } from 'src/app/shared/swal.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { TodoService } from './todo.service';
import { Todo } from './todo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  user;
  checked;
  items: Observable<Todo[]>;
  isCompleted;
  todoForm: FormGroup;

  // tslint:disable-next-line:max-line-length
  constructor(private service: AuthService, private toast: Sweetalert2Service, private loading: NgxSpinnerService, private todos: TodoService) {
this.getUser();
  }

  ngOnInit() {


    this.todoForm = new FormGroup({
      item: new FormControl('', Validators.compose([
        Validators.required

      ])),
    });

  }
  get item() { return this.todoForm.get('item'); }

  onSubmit(f) {
    // stop here if form is invalid
    if (this.todoForm.invalid) {
      return;
    }
    const todo: Todo = { item: f.item, id: this.user._id, isCompleted: false };
    this.loading.show();
    this.todos.postTodo(todo).subscribe(
      res => {
        this.toast.show('success', res.msg);
        this.todoForm.reset();
        this.loading.hide();

      },
      err => {
        this.toast.show('warning', err.error.msg);
        this.todoForm.reset();
        this.loading.hide();
      }
    );
    this.getTodo();
  }

  getUser(){
    this.user= this.service.getToken();
    return this.user;
  }
  getTodo() {
    return this.items= this.todos.getTodo(this.user._id);

  }


  completed(c) {
    this.isCompleted = !c.isCompleted;
    this.loading.show();
    const data = {item: c.item, id: c.id, isCompleted: this.isCompleted};
    this.todos.updateTodo(c._id, data).subscribe(
      res => {
        this.toast.show('success', res.msg);
        this.loading.hide();
        this.getTodo();
      },
      err => {
        this.toast.show('warning', err.error.msg);
        this.loading.hide();
      }
    );
  }

  removeItem(s) {
    this.loading.show();
    this.todos.deleteTodo(s._id).subscribe(
      res => {
        this.toast.show('success', res.msg);
        this.loading.hide();
        this.getTodo();
      },
      err => {
        this.toast.show('warning', err.error.msg);
        this.loading.hide();
      }
    );

  }
  trackBy(index: number, item: any){
    return item;
  }

}


