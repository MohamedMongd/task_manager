import { Component, OnInit } from '@angular/core';
import { Task } from '../app.component';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {
  allTask: any[] = [];
  
  constructor(private _TaskService: TaskService) {}
  
  ngOnInit(): void {
    this._TaskService.getAll().subscribe((data) => {
      this.allTask = data;
      console.log("Fetched tasks:", this.allTask); 
    });
  }
  
  deletItem(id: number) {
    this._TaskService.Delet(id).subscribe({
      next: (data) => {
        this.allTask = this.allTask.filter(_ => _.id != id);
      }
    });
  }

  
  toggleComplete(task: any) {
    task.isCompleted = !task.isCompleted; 
  }
}
