import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITask } from '../model/itask';


@Injectable({
  providedIn: 'root',
})
export class TaskRepository {
  constructor(
    private httpClient: HttpClient
  ) { }

  create(task: ITask): Promise<any> {
    return this.httpClient
      .post<any>(`${environment.api}/tasks`, task)
      .toPromise();
  }

  update(entity: ITask): Promise<any> {
    const { id, ...data } = entity;
    return this.httpClient
      .put<any>(`${environment.api}/tasks/${id}`, data)
      .toPromise();
  }

  getById(id: string): Promise<any> {
    return this.httpClient
      .get<ITask>(`${environment.api}/tasks/${id}`)
      .toPromise();
  }

  getAll(): Promise<any> {
    return this.httpClient
      .get<ITask[]>(`${environment.api}/tasks/`)
      .toPromise();
  }

  async delete(id: string): Promise<void> {
    await this.httpClient.delete(`${environment.api}/tasks/${id}`).toPromise();
    return;
  }
}
