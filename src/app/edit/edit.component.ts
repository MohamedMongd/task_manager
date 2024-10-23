import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../app.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  formData: any = {
    id: '',
    title: '',
    details: ''
  };

  constructor(
    private _TaskService: TaskService,
    private _Router: Router,
    private _ActivatedRoute: ActivatedRoute 
  ) {}

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((paramMap) => {
      let id = Number(paramMap.get('id'));
      console.log("Extracted ID:", id);  
      this.getById(id);
    });
  }
  

  getById(id: number): void {
    console.log("Fetching task with ID:", id);
    this._TaskService.edit(id).subscribe((data) => {
      this.formData = data;  
    });
  }

  updateTask(): void {
    this._TaskService.update(this.formData.id, this.formData).subscribe(() => {
      this._Router.navigate(['/list-task']); 
    });
  }
}
