import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { MypipePipe } from './mypipe.pipe';
import { MyhighlightDirective } from './myhighlight.directive';
import { TaskDetailsComponent } from './task-details/task-details.component';

import {FormsModule} from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {TasksService } from './tasks.service';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AddTaskComponent } from './add-task/add-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';

import { RouterModule } from '@angular/router';
import { MatFormFieldModule, MatInputModule } from '@angular/material/';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    TasksListComponent,
    MypipePipe,
    MyhighlightDirective,
    TaskDetailsComponent,
    AddTaskComponent,
    EditTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forRoot(
      [
        { path: 'tasks', component: TasksListComponent},
        { path: 'add', component: AddTaskComponent},
        { path: 'edit/:id', component: EditTaskComponent},
        { path: '', redirectTo: '/tasks', pathMatch: 'full'}
      ]
    )
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
