import { Component } from '@angular/core';
import { TaskService } from '../../services/tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrl: './task-add.component.css',
})
export class TaskAddComponent {
  title : string;
  description: string;

  constructor(private taskService: TaskService, private router: Router) {}

  onAddTask() {
     this.taskService.addTask(this.title, this.description, 'To Do');
     alert("Task Added Successfully!");
     this.router.navigate(['/tasks']);
  }

}
