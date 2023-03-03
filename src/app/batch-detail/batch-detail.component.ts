import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
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

  @Input() batch?: Batch;
  batchDetails: BatchDetail[] = [];

  constructor(
    private route: ActivatedRoute,
    private batchService: BatchService,
    private batchDetailService: BatchDetailService
  ) { }

  ngOnInit(): void {
    this.getBatchDetail();
  }

  getBatchDetail(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.batchDetailService.getBatchDetails(id)
      .subscribe(batchDetails => this.batchDetails = batchDetails);
  }
}
