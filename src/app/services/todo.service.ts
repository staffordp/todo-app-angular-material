import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo';

@Injectable()
export class TodoService {

  private todoArr: Todo[];
  private nextIndex: number;

  constructor() {
    this.todoArr = [
      new Todo(0, 'blank text'),

    ]
    this.nextIndex = 1;
  }

  public getTodos(): Todo[] {
    return this.todoArr;
  }

  public addTodo(text: string, date: string): void {
    console.log('Adding todo!');
    // Create a new todo from the input
    let todo = new Todo(this.nextIndex, text, date);
    // Push the todo to the array
    this.todoArr.push(todo);
    console.log('Todos are:');
    console.log(this.todoArr);
  }

}


