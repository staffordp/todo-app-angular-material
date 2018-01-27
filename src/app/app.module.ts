import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {Input, NgModule} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatCheckboxModule, MatIconModule, MatIconRegistry} from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TodoInputComponent } from './components/todo-input/todo-input.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TodoService } from './services/todo.service';
import { MomentModule } from 'angular2-moment';

import { OwlDateTimeModule, OwlNativeDateTimeModule, OWL_DATE_TIME_LOCALE  } from 'ng-pick-datetime';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoInputComponent,
    ProfileComponent,
    TodoItemComponent
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
    OwlNativeDateTimeModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    HttpClientModule,
    MatTooltipModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class TodoAppModule {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'morevert',
      sanitizer.bypassSecurityTrustResourceUrl('./assets/more.svg'));
  }

  @Input()

  private disableButton: boolean;



}
