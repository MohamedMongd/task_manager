import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './app.component';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private _HttpClient: HttpClient) {}

  getAll() {
    return this._HttpClient.get<Task[]>('http://localhost:3000/tasks')
      .pipe(catchError(this.handleError));
  }
  add(data:Task){
    return this._HttpClient.post('http://localhost:3000/tasks',data)
  }
  edit(id: number) {
    return this._HttpClient.get<Task>(`http://localhost:3000/tasks/${id}`)
      .pipe(catchError(this.handleError));
  }

  update(id: number, data: Task) {
    return this._HttpClient.put<Task>(`http://localhost:3000/tasks/${id}`, data)
      .pipe(catchError(this.handleError));
  }
  Delet(id: number) {
    return this._HttpClient.delete<Task>(`http://localhost:3000/tasks/${id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
}
