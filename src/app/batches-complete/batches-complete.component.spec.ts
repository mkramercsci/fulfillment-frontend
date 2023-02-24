import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchesCompleteComponent } from './batches-complete.component';

describe('BatchesCompleteComponent', () => {
  let component: BatchesCompleteComponent;
  let fixture: ComponentFixture<BatchesCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchesCompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatchesCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
