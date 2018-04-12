import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable()
export class TasksService {
  private id = 0;
  private tasks: Task[] = [];

  constructor() {
    if (localStorage.getItem('id')) {
      this.id = Number(localStorage.getItem('id'));
    }

    if (localStorage.getItem('tasks')) {
      this.tasks = JSON.parse(localStorage.getItem('tasks'));
    }
   }

  findAllTasks(): Task[] {
    return this.tasks;
  }

  addTask(t: Task): void {
    t.id = this.id++;
    this.tasks.push(t);
    localStorage.setItem('id', String(this.id));
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  updateTask(t: Task): void {
    const index = this.tasks.findIndex((_t) => _t.id === t.id);
    if (index !== -1) {
      this.tasks[index] = t;
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }

  findTaskById(id: number): Task {
   const index = this.tasks.findIndex((t) => t.id === id);
   if (index !== -1) {
      return this.tasks[index];
    } else {
      return null;
    }
  }

  removeTask(id: number): void {
    const index = this.tasks.findIndex((t) => t.id === id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }
}
