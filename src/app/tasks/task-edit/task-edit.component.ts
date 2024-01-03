import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../../services/tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrl: './task-edit.component.css'
})
export class TaskEditComponent implements OnInit {
  isLoading = false;
  errors = '';
  title : string;
  description: string;

  task!: any;
  taskId!: any;

  constructor(private route: ActivatedRoute, private taskService: TaskService, private router: Router) {}

  ngOnInit(){
    this.taskId = this.route.snapshot.paramMap.get('id');
    this.task = this.taskService.getTask(this.taskId);
  }

  updateTask(){
    var inputData = {
      title: this.task.title,
      description: this.task.description,
      status: this.task.status
    };
    
    this.taskService.updateTask(inputData, this.taskId);
    alert("Task Updated Successfully!");
    this.router.navigate(['/tasks']);
  }

 
}
