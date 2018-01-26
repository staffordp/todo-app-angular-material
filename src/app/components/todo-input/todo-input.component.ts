import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import * as _moment from 'moment';
import {default as _rollupMoment} from 'moment';
const moment = _rollupMoment || _moment;
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  private todoText: string;

  constructor(private todoService: TodoService) {
    this.todoText = '';
  }

  ngOnInit() {
  }

  private addTodo() {
    console.log('Adding TODO.');

  }

}
