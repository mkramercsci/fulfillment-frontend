import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Batch } from './batch';
import { BatchService } from './batch.service';

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
    this.getBatches();
    this.getComplete();
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

  // TESTING method
  // delete the entire workload
  // batch_details, orders, and batches DB tables are completely emptied
  deleteAll(): void {
    this.batchService.deleteAll().subscribe();
    this.batches = [];
    this.complete = [];
  }

  // switch between component views of batches and complete
  toggleDisplay(): void {
    this.batchesVisible = this.batchesVisible ? false : true;
    this.completeVisible = this.completeVisible ? false : true;

    this.navTitle = this.batchesVisible ? "Show Complete Batches" : "Show Batches In Progress";
  }
}
