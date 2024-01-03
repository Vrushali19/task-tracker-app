import { Component } from '@angular/core';
import { TaskService } from './services/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [TaskService],
})

export class AppComponent {
  title = 'task-tracker-app';
}
