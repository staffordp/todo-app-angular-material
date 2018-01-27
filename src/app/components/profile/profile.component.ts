import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() {
    this.userName = 'Guest';
  }

  private userName: string;

  private showProfile():void {
    console.log('Am showing profile now.');
  }



  ngOnInit() {
  }

}
