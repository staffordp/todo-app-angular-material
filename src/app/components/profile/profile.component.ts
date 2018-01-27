import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private todoService: TodoService) {
    this.userName = 'Guest';
  }

  private userName: string;

  private showProfile():void {
    console.log('Am showing profile now.');
    this.todoService.setShowprofile();
  }



  ngOnInit() {
  }

}
