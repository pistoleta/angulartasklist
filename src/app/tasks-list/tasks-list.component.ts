import { Component, OnInit, OnDestroy } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit, OnDestroy {

   tasks: Task[];

  constructor() {
    this.tasks = [
      {id: 0, title: 'Titulo1', pending: false},
      {id: 1, title: 'Titulo2', pending: true},
      {id: 2, title: 'Titulo3', pending: false}];
    }

  deleteTask(t: Task) {
      console.log(`TaskList.deleTask(${t.id})`);
      const index = this.tasks.findIndex((_t) => t.id === _t.id);
      if (index !== -1) {
        this.tasks.splice(index, 1);
      }
    }

  ngOnInit() {
    console.log('ngOnInit()');
  }

  ngOnDestroy() {
    console.log('ngOndestroy()');
  }
}
