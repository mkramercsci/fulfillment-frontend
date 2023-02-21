import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Batch } from '../batch'
import { BatchService } from '../batch.service'

@Component({
  selector: 'app-batches',
  templateUrl: './batches.component.html',
  styleUrls: ['./batches.component.css']
})
export class BatchesComponent implements OnInit {
  batches: Batch[] = [];

  constructor(private batchService: BatchService) { }

  ngOnInit(): void {
    this.getBatches();
  }

  getBatches(): void {
    this.batchService.getBatches().subscribe(
      (response: Batch[]) => {
        this.batches = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  // add one new random batch to the workload
  add(): void {
    this.batchService.addBatch({} as Batch)
      .subscribe(batch => {
        this.batches.push(batch);
      });
  }

  // TESTING method
  // delete the entire workload
  // batch_details, orders, and batches DB tables are completely emptied
  deleteAll(): void {
    this.batchService.deleteAll().subscribe();
    this.batches = [];
  }
}
