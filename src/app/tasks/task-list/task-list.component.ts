import { Component, OnInit, Input } from '@angular/core';
//import { Task } from '../task.model';
import { TaskService } from '../../services/tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})

export class TaskListComponent implements OnInit {
  tasks: {title: string, description: string, status: string}[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.taskService.tasks;
  }

 /*tasks: Task[] = [
  new Task('Create a Angular Project','Create a angular project for hotel management.','To Do'),
  new Task('Create a Angular Project','Create a angular project for hospital management.','In Progress'),
  new Task('Create a Angular Project','Create a angular project for task management.','Done')
 ];*/
}
