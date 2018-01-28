import {Input} from '@angular/core';
import {Injectable} from '@angular/core';
import {Todo} from '../classes/todo';
import {User} from '../classes/user';
import {FormControl} from '@angular/forms';

@Injectable()
export class TodoService {

  todoDate = new FormControl(new Date());
  private todoArr: Todo[];
  private userArr: User[];
  private nextIndex: number;
  private nextUserindex: number;
  private isShowingtodo: boolean;
  private isShowingprofile: boolean;
  private showTodo: boolean;
  private showProfile: boolean;

  constructor() {
    this.todoArr = [
      new Todo(0, '2016-02-02T16:26:50-05:00', 'Countin\' flowers on the wall. That don\'t bother me at all.'),
      new Todo(1, '2015-02-02T16:26:50-05:00', 'Playin\' solitaire till dawn with a deck of fifty-one'),
      new Todo(2, '201802-02T16:26:50-05:00', 'Smokin\' cigarettes and watchin\' Captain Kangaroo')
    ];
    this.userArr = [
      new User(0, 'Guest', 'something@example.com'),
    ];
    this.nextIndex = 3;
    this.nextUserindex = 1;
    this.isShowingtodo = false;
    this.isShowingprofile = false;
    this.showTodo = false;
    this.showProfile = false;
  }

  public getTodos(): Todo[] {
    return this.todoArr;
  }

  public addTodo(text: string, date): void {
    console.log('Adding todo!');
    // Create a new todo from the input
    const todo = new Todo(this.nextIndex, text, date);
    // Push the todo to the array
    this.todoArr.push(todo);
    // Hide the todo input
    this.showTodo = false;
    // Increase the index
    this.nextIndex++;
  }

  public deleteTodo(idx: number): void {
    this.todoArr = this.todoArr.filter(function (item) {
      return item.idx !== idx;
    });
    console.log('deleting ' + idx);

    console.log(this.todoArr);

  }

  public getShowinput(): boolean {
    // console.log('Show Input');
    // this.isShowingtodo = true;
    // return this.isShowingtodo;
    return this.showTodo;
  }

  public showInput(): void {
    this.showTodo = !this.showTodo;
  }

  public getShowprofile(): boolean {
    // return this.isShowingprofile;
    return this.showProfile;
  }


  public setShowprofile(): void {
    this.showProfile = !this.showProfile;
    console.log('toggling showProfile in service.');
    console.log(this.showProfile);
  }


  public addUser(someName: string, someEmail: string): void {
    console.log('Adding user!');
    // Check to see if it is modifying an existing user
    // Since we are not storing the user data as persistent, we can just check to see if the current user matches the latest index
    const x = this.userArr.length;
    if (x !== 1) {
      this.userArr.pop();
      console.log('Modifying old user');
      this.nextUserindex = x;
      // let user = new User(x, someName, someEmail);
    } else {
      console.log('Adding new user!');
      this.nextUserindex++;
    }
    const user = new User(this.nextUserindex, someName, someEmail);
    this.userArr.push(user);

    this.setShowprofile();

  }

  public getProfile(): string {
    // console.log('Returning user');
    return this.userArr[this.userArr.length - 1].realName;
  }

}


