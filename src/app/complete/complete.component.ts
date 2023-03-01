import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Batch } from '../batch';
import { BatchService } from '../batch.service';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent implements OnInit {

  @Input() batches: Batch[] = [];

  constructor(private batchService: BatchService) { }

  ngOnInit(): void {
  }
}
