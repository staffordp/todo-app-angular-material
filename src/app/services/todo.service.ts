import { Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo';
import {FormControl} from '@angular/forms';

@Injectable()
export class TodoService {

  private todoArr: Todo[];
  private nextIndex: number;
  private isShowingtodo: boolean;
  private showTodo: boolean;

  constructor() {
    this.todoArr = [
      new Todo(0, '2018-02-02T16:26:50-05:00', 'Countin\' flowers on the wall. That don\'t bother me at all.'),
      new Todo(1, '2018-02-02T16:26:50-05:00', 'Playin\' solitaire till dawn with a deck of fifty-one'),
      new Todo(2, '2018-02-02T16:26:50-05:00', 'Smokin\' cigarettes and watchin\' Captain Kangaroo')
    ]
    this.nextIndex = 1;
    this.isShowingtodo = false;
    this.showTodo = false;
  }

  public getTodos(): Todo[] {
    return this.todoArr;
  }
  todoDate = new FormControl(new Date());
  public addTodo(text: string, date): void {
    console.log('Adding todo!');
    // Create a new todo from the input
    let todo = new Todo(this.nextIndex, text, date);
    // Push the todo to the array
    this.todoArr.push(todo);
    // Hide the todo input
    this.showTodo = false;
  }

  public deleteTodo(index: number): void {
    this.todoArr = this.todoArr.filter(function(item) {
      return item.index !== index;
    });
    console.log('deleting ' + index);

    console.log(this.todoArr);

  }

  public getShowinput(): boolean {
    // console.log('Show Input');
    // this.isShowingtodo = true;
    return this.isShowingtodo;
  }

  public showInput(): void {
    this.showTodo = !this.showVar;
    console.log('Setting to true');

  }

}


