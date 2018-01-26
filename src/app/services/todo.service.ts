import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo';
import { DatePipe } from '@angular/common';

@Injectable()
export class TodoService {

  private todoArr: Todo[];
  private nextIndex: number;

  constructor() {
    this.todoArr = [
      new Todo(0, '2018-02-02T16:26:50-05:00', 'Countin\' flowers on the wall. That don\'t bother me at all.'),
      new Todo(1, '2018-02-02T16:26:50-05:00', 'Playin\' solitaire till dawn with a deck of fifty-one'),
      new Todo(2, '2018-02-02T16:26:50-05:00', 'Smokin\' cigarettes and watchin\' Captain Kangaroo')
    ]
    this.nextIndex = 1;
  }

  public getTodos(): Todo[] {
    console.log(this.todoArr);
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


