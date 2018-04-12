import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Task } from '../task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  /*entrada*/
  @Input()
  task: Task;
  @Output()
  deleted = new EventEmitter();

  constructor(private router: Router) { }

  editTask() {
    this.router.navigateByUrl(`/edit/${this.task.id}`);
  }

  deleteTask() {
    console.log(`deleteTask(${this.task.id})`);
    this.deleted.emit(this.task);
  }
  completeTask() {
    this.task.pending = false;
  }

  ngOnInit() {
  }

}
