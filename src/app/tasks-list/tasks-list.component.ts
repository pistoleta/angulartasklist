import { Component, OnInit, OnDestroy } from '@angular/core';
import { Task } from '../task';
import { TasksService } from '../tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})

export class TasksListComponent implements OnInit, OnDestroy {

    constructor(public tasks: TasksService, private router: Router) {
    }

    addTask() {
     // const title = prompt('Introducir nombre tarea');
     // this.tasks.addTask({title: title, pending: true});
     this.router.navigateByUrl('/add');
    }

    deleteTask(t: Task) {
      this.tasks.removeTask(t.id);
    }

    ngOnInit() {
      console.log('ngOnInit()');
    }

    ngOnDestroy() {
      console.log('ngOndestroy()');
    }
}
