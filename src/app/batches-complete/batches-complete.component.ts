import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Batch } from '../batch';
import { BatchService } from '../batch.service';

@Component({
  selector: 'app-batches-complete',
  templateUrl: './batches-complete.component.html',
  styleUrls: ['./batches-complete.component.css']
})
export class BatchesCompleteComponent implements OnInit {

  @Input() batches: Batch[] = [];

  constructor(private batchService: BatchService) { }

  ngOnInit(): void {
  }
}
