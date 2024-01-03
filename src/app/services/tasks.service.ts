import { Title } from "@angular/platform-browser";
import { Task } from "../tasks/task.model";

export class TaskService {
    tasks = [
        {
            title: 'Create a Angular Project for Hotel Management', 
            description: 'Project for Hotel Management. In this task, you all be designing a cool, easy-to-use app that helps hotels keep track of bookings, manage rooms, and handle billing. We all make it super interactive and modern. It is your chance to learn how to make web applications and create something awesome for the hotel industry! ', 
            status: 'In Progress'
        },
        {
            title: 'Create a Angular Project for Hospital Management', 
            description: 'This project revolves around designing a robust web application tailored for the healthcare sector, offering seamless management of hospital resources, patient records, and administrative tasks.', 
            status: 'To Do'
        },
        {
            title: 'Create a Angular Project for Task Management', 
            description: 'An Angular Project for Task Management. In this task, you all be crafting a dynamic web application to help users organize, track, and efficiently manage their tasks. Utilizing the Angular framework, your goal is to design a user-friendly interface that allows for seamless task creation, categorization, and status tracking.', 
            status: 'Done'
        }
    ];

    addTask(title: string, description: string, status:string)
    {
        this.tasks.push({title: title, description: description, status: status});
    }

    getTask(taskId: any){
        return this.tasks[taskId];
    }

    updateTask(inputData: Task, taskId: any){
       this.tasks[taskId] = inputData;
    }

}