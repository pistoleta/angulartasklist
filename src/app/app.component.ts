import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  msg: string;
  today: Date;
  constructor() {
    this.msg = 'Mis tareas';
    this.today = new Date();
  }
}
