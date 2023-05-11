import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Batch } from '../model/batch';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class BatchService {
  private batchesUrl = environment.apiBaseUrl + "/batches";

  constructor(private http: HttpClient) { }

  addBatch(batch: Batch): Observable<Batch> {
    return this.http.post<Batch>(`${this.batchesUrl}/add`, batch);
  }

  getBatches(): Observable<Batch[]> {
    return this.http.get<Batch[]>(`${this.batchesUrl}/all`);
  }

  getBatch(id: number): Observable<Batch[]> {
    return this.http.get<Batch[]>(`${this.batchesUrl}/${id}`);
  }

  getComplete(): Observable<Batch[]> {
    return this.http.get<Batch[]>(`${this.batchesUrl}/complete`);
  }

  setComplete(batch: Batch, id: number): Observable<Batch> { // {
    const url = `${this.batchesUrl}/set_complete/${id}`;
    return this.http.post<Batch>(url, batch);
  }

  deleteAll(): Observable<Batch[]> {
    return this.http.delete<Batch[]>(`${this.batchesUrl}/delete_all`);
  }
}
