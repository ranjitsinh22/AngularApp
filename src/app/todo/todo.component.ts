import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

//unsubscribe to obsevable
subscription: Subscription;

ngOnDestroy(): void {
  this.subscription.unsubscribe();
}


  todoList: any = [];
  // Inject the todo service
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodos();
  }

  createTodo() {
    let todo = {
      id : new Date().getTime(),
      title: `Practice decorator`
    }

    //assign to data
  this.subscription=  this.todoService.create(todo).subscribe(res => {
      console.log('todo create', res);
      this.getTodos();
    })
  }

  getTodos() {
    this.todoService.list().subscribe((res)=>{
      this.todoList = res;
      console.log('get todos list', this.todoList);
    }, error => {
      console.log('error occured');
    })
  }

  editTodo(todo: any) {
    let data = {
      id: new Date().getTime(),
      title: 'edited doto'
    }
    this.todoService.update(todo.id, data).subscribe((res)=> {
      this.getTodos();
    }, err=> {
      console.log('error occured');
    })
  }

  deleteTodo(id: any) {
    this.todoService.delete(id).subscribe((res) => {
      this.getTodos();
    }, (error => {
      console.log('error occured', error);
    }))
  }


}
