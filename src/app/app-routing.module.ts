import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BatchesComponent } from './batches/batches.component';
import { RouterModule, Routes } from '@angular/router';
import { CompleteComponent } from './complete/complete.component';
import { BatchDetailComponent } from './batch-detail/batch-detail.component';

const routes: Routes = [
  { path: 'batches', component: BatchesComponent },
  { path: 'complete', component: CompleteComponent },
  { path: 'detail/:id', component: BatchDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
