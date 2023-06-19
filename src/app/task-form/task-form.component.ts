import { Component } from '@angular/core';
import { Task } from '../model/task'; // Import the Task model
import { TaskService } from '../service/task.service'; // Import the TaskService

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  newTask: Task = {
    title: '', 
    dueDate: '',
    completed: false,
    id: undefined,
    updatedTitle: '',
    updatedDueDate: '',
    editableTitle: false,
    editableDueDate: false
  }; 

  constructor(private taskService: TaskService) {}

  addTask(): void {
    const newTask: Task = {
      title: this.newTask.title,
      dueDate: this.newTask.dueDate,
      completed: false,
      id: undefined,
      updatedTitle: '',
      updatedDueDate: '',
      editableTitle: false,
      editableDueDate: false
    };
  
    this.taskService.addTask(newTask); // Add the new task using the task service
  
    // Reset the form field
    this.newTask.title = '';
    this.newTask.dueDate = '';
  }
  
  

}
