import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

import { Batch } from '../model/batch'
import { BatchService } from '../service/batch.service'

@Component({
  selector: 'app-batches',
  templateUrl: './batches.component.html',
  styleUrls: ['./batches.component.css']
})

export class BatchesComponent implements OnInit {

  @Input() batches: Batch[] = [];

  constructor(private batchService: BatchService) { }

  ngOnInit(): void {
    this.getBatches();
  }

  onSelect(batch: Batch): void {
    alert(batch.id);
  }


  // add one new random batch to the workload
  add(): void {
    this.batchService.addBatch({} as Batch)
      .subscribe(batch => {
        this.batches.push(batch);
      });
  }

  // get all batches with complete = false
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

  // TESTING method
  // delete the entire workload
  // batch_details, orders, and batches DB tables are completely emptied
  deleteAll(): void {
    this.batchService.deleteAll().subscribe();
    this.batches = [];
  }
}
