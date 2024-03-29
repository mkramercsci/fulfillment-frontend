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


  navTitle: string = "Show Complete Batches"

  title: string = 'Fulfillment Simulator';

  constructor(private batchService: BatchService) { }

  ngOnInit() {

  }

}
