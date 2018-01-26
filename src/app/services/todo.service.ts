import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo';

@Injectable()
export class TodoService {

  private todosArr: Todo[];
  private nextIndex: number;

  constructor() {
    this.todosArr = [
      new Todo(0, 'blank text'),

    ]
    this.nextIndex = 1;
  }

  public getTodos(): Todo[] {
    return this.todosArr;
  }

}


