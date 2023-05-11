import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Batch } from '../model/batch';
import { BatchDetail } from '../model/batch-detail';
import { BatchDetailService } from '../service/batch-detail.service';
import { BatchService } from '../service/batch.service';

@Component({
  selector: 'app-batch-detail',
  templateUrl: './batch-detail.component.html',
  styleUrls: ['./batch-detail.component.css']
})
export class BatchDetailComponent implements OnInit {

  batchDetails: BatchDetail[] = [];
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private batchService: BatchService,
    private batchDetailService: BatchDetailService,
  ) { }

  ngOnInit(): void {
    this.getBatch();
    this.getBatchDetail(this.id);
  }

  getBatchDetail(id: number): void {
    this.batchDetailService.getBatchDetails(id)
      .subscribe(batchDetails => this.batchDetails = batchDetails);
  }

  getBatch(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  setComplete(): void {
    this.batchService.setComplete({} as Batch, this.id).subscribe();
  }

  exit(): void {

  }

}
