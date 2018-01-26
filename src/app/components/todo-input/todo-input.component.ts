import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import * as _moment from 'moment';
import {default as _rollupMoment} from 'moment';
const moment = _rollupMoment || _moment;

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css'],
  providers: [
  ],
})
export class TodoInputComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
