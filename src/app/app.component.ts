import { Component, OnInit } from '@angular/core';
import { Batch } from './batch';
import { BatchService } from './batch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public batches: Batch[] = [];
  public title: string = 'Fulfillment Simulator';

  constructor(private batchService: BatchService) { }

  ngOnInit() {
  }

}
