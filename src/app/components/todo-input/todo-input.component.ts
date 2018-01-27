import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
// import * as _moment from 'moment';
// import {default as _rollupMoment} from 'moment';
// const moment = _rollupMoment || _moment;
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  @Input()

  private showMe: boolean;
  private todoText: string;

  private todoDate: string;
  private showTodoinput: boolean;
  // todoDate = new FormControl(new Date());
  // date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());



  constructor(private todoService: TodoService) {
    this.todoText = '';
    // this.todoDate = '';
    this.todoDate = this.serializedDate.value;
    this.showTodoinput = todoService.getShowinput();
    this.showMe = false;
    console.log(this.showTodoinput);
  }

  ngOnInit() {
  }

  private addTodo(): void {
    console.log('Adding TODO.');
    console.log(this.todoDate);
    console.log(typeof(this.todoDate));
    // console.log(this.todoDate);
    // this.todoDate = this.todoDate.toString();
    this.todoService.addTodo(this.todoDate, this.todoText);


  }

}
