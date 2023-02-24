import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Batch } from './batch';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BatchService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }


  public addBatch(batch: Batch): Observable<Batch> {
    return this.http.post<Batch>(`${this.apiServerUrl}/batches/add`, batch);
  }

  public getBatches(): Observable<Batch[]> {
    return this.http.get<Batch[]>(`${this.apiServerUrl}/batches/all`);
  }

  public getComplete(): Observable<Batch[]> {
    return this.http.get<Batch[]>(`${this.apiServerUrl}/batches/complete`);
  }

  public deleteAll(): Observable<Batch[]> {
    return this.http.delete<Batch[]>(`${this.apiServerUrl}/batches/delete_all`);
  }
}
