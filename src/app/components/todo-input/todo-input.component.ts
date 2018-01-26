import { Component, OnInit } from '@angular/core';
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

  private todoText: string;
  private todoDate: string;

  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());


  constructor(private todoService: TodoService) {
    this.todoText = '';
    this.todoDate = this.serializedDate.value;
  }

  ngOnInit() {
  }

  private addTodo(): void {
    console.log('Adding TODO.');
    console.log(this.todoText);
    console.log(this.todoDate);
    this.todoService.addTodo(this.todoText, this.todoDate);

  }

}
