import { Component, OnInit } from '@angular/core';
/*para recibir parametros de otros componentes*/
import { ActivatedRoute } from '@angular/router';
/*para recuperar y guardar tareas*/
import { TasksService } from '../tasks.service';
import { Task } from '../task';
/*navegabilidad*/
import { Location } from '@angular/common';


@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  public task: Task;
  constructor(private route: ActivatedRoute, private tasks: TasksService, private location: Location) {}

  back() {
    this.tasks.updateTask(this.task);
    this.location.back();
  }

  completeTask() {
    this.task.pending = false;
    this.tasks.updateTask(this.task);
    this.location.back();
  }

  deleteTask() {
    this.tasks.removeTask(this.task.id);
    this.location.back();
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.task = this.tasks.findTaskById(id);
  }

}
