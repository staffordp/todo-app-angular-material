import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {NgModule} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TodoInputComponent } from './components/todo-input/todo-input.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TodoService } from './services/todo.service';
import { MomentModule } from 'angular2-moment';

import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoInputComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MomentModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class TodoAppModule { }
