import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskFormPageComponent } from './task/pages/task-form-page/task-form-page.component';
import { TaskListPageComponent } from './task/pages/task-list-page/task-list-page.component';

const routes: Routes = [
  {
    path: 'new',
    component: TaskFormPageComponent,
  },
  {
    path: 'edit/:id',
    component: TaskFormPageComponent,
  },
  {
    path: '',
    component: TaskListPageComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
