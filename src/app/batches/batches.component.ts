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

  }

  setComplete(): void {
    alert("clicked");
  }
}
