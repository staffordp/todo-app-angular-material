import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo';

@Injectable()
export class TodoService {

  private todos: Todo[];
  private nextIndex: number;

  constructor() {
    this.todos = [
      new Todo(0, 'blank text'),

    ]
    this.nextIndex = 1;
  }

}


}
