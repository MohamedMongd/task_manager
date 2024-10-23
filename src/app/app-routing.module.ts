import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { AddtTasksComponent } from './addt-tasks/addt-tasks.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/task-list', pathMatch: 'full' }, 
  { path: 'task-list', component:ListTasksComponent },
  {path:'addtask',component:AddtTasksComponent},
  { path: 'edit/:id', component: EditComponent },
  { path: '**', redirectTo: '/task-list' } 
,
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
};
