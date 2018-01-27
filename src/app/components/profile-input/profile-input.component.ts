import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-profile-input',
  templateUrl: './profile-input.component.html',
  styleUrls: ['./profile-input.component.css']
})
export class ProfileInputComponent implements OnInit {


  private showingProfile: boolean;

  constructor(private todoService: TodoService) {
    this.showingProfile = todoService.getShowprofile();

  }

  private showProfile(): void {
    console.log('Am showing profile now.');
    this.todoService.setShowprofile();
  }

  ngOnInit() {
  }

}
