import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

import { Batch } from '../batch'
import { BatchService } from '../batch.service'

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
}
