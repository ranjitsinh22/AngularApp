// task.service.ts

import { Injectable } from '@angular/core';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
  showTaskList = false;
  newTask: any = {};

  constructor() { }

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  markTaskAsCompleted(task: Task): void {
    task.completed = true;
  }

  updateTask(updatedTask: Task): void {
    const taskIndex = this.tasks.findIndex(task => task.id === updatedTask.id);

    if (taskIndex !== -1) {
      this.tasks[taskIndex].title = updatedTask.title;
      this.tasks[taskIndex].dueDate = updatedTask.dueDate;
      this.tasks[taskIndex].completed = updatedTask.completed;
    }
  }

  deleteTask(task: Task): void {
    const taskIndex = this.tasks.indexOf(task);

    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
    }
  }
}
