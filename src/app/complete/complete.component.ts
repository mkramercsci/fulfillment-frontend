import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Batch } from '../batch'
import { BatchService } from '../batch.service'

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent implements OnInit {

  batches: Batch[] = [];

  constructor(private batchService: BatchService) { }

  ngOnInit(): void {
    this.getComplete();
  }

  getComplete(): void {
    this.batchService.getComplete().subscribe(
      (response: Batch[]) => {
        this.batches = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
