import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Batch } from './model/batch';
import { BatchService } from './service/batch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  batches: Batch[] = [];
  complete: Batch[] = [];

  batchesVisible: boolean = true;
  completeVisible: boolean = false;

  navTitle: string = "Show Complete Batches"

  title: string = 'Fulfillment Simulator';

  constructor(private batchService: BatchService) { }

  ngOnInit() {

  }

  // switch between component views of batches and complete
  toggleDisplay(): void {
    this.batchesVisible = this.batchesVisible ? false : true;
    this.completeVisible = this.completeVisible ? false : true;

    this.navTitle = this.batchesVisible ? "Show Complete Batches" : "Show Batches In Progress";
  }
}
