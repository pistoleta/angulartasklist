import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { MypipePipe } from './mypipe.pipe';
import { MyhighlightDirective } from './myhighlight.directive';
import { TaskDetailsComponent } from './task-details/task-details.component';


@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    TasksListComponent,
    MypipePipe,
    MyhighlightDirective,
    TaskDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
