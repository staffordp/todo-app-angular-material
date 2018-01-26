import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  private todos: Todo[];
  private nextIndex: number;

  constructor() {

  }

}


}
