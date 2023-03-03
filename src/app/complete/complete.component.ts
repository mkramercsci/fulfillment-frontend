import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Batch } from '../model/batch';
import { BatchService } from '../service/batch.service';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent implements OnInit {

  @Input() complete: Batch[] = [];

  constructor(private batchService: BatchService) { }

  ngOnInit(): void {
    this.getComplete();
  }

  // get all batches with complete = true
  getComplete(): void {
    this.batchService.getComplete().subscribe(
      (response: Batch[]) => {
        this.complete = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
