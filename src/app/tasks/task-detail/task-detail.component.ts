import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../../services/tasks.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.css'
})
export class TaskDetailComponent implements OnInit {

  task!: any;
  taskId!: any;

  constructor(private route: ActivatedRoute, private taskService: TaskService) {}

  ngOnInit(){
    this.taskId = this.route.snapshot.paramMap.get('id');
    this.task = this.taskService.getTask(this.taskId);
  }

}
