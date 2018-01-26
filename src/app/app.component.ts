import { Component } from '@angular/core';
import * as moment from 'moment';
import { TodoService } from './services/todo.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoApp';
  constructor(private todoService: TodoService) {
    let now = moment();
    console.log('hello world', now.format());
    console.log(now.add(7, 'days').format());
  }
}
