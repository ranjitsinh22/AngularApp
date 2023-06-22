// task-list.component.ts

import { Component } from '@angular/core';
import { Task } from '../model/task';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks: Task[] = [];
  filterStatus: string = 'all'; // Default filter value

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }


  //checkbox value 
  markAsCompleted(task: any) {
    task.completed = !task.completed;
    
  }
  

  updateTask(task: Task): void {
    task.title = task.updatedTitle;
    task.dueDate = task.updatedDueDate;
    task.editableTitle = false;
    task.editableDueDate = false;
    this.taskService.updateTask(task);
  }

  updateTaskStatus(task: Task): void {
    task.completed = !task.completed;
    this.taskService.updateTask(task);
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task);
    this.tasks = this.tasks.filter(t => t !== task);
  }

  editTask(task: Task): void {
    task.editableTitle = true;
    task.editableDueDate = true;
    task.updatedTitle = task.title;
    task.updatedDueDate = task.dueDate;
  }

  get filteredTasks(): Task[] {
    if (this.filterStatus === 'completed') {
      return this.tasks.filter(task => task.completed);
    } else if (this.filterStatus === 'pending') {
      return this.tasks.filter(task => !task.completed);
    } else {
      return this.tasks;
    }
  }
}
