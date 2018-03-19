import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Task } from '../task';

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

  constructor() { }

  deleteTask() {
    console.log(`deleteTask(${this.task.id})`);
    this.deleted.emit(this.task);
  }
  ngOnInit() {
  }

}
