import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../classes/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()

  private todo: Todo;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  private deleteTodo(): void {
    console.log('Deleting TODO.');
    this.todoService.deleteTodo(this.todo.index);

  }

  private doneTodo(): void {
    console.log('Done-ing TODO.');
  }
}
