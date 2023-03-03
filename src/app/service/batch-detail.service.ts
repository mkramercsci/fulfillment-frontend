import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { BatchDetail } from '../model/batch-detail';

@Injectable({
  providedIn: 'root'
})
export class BatchDetailService {

  private batchDetailsUrl = environment.apiBaseUrl + "/batch_details";

  constructor(private http: HttpClient) { }

  // get the details of a specified batch
  getBatchDetails(id: number): Observable<BatchDetail[]> {
    return this.http.get<BatchDetail[]>(`${this.batchDetailsUrl}/${id}`);
  }

}
