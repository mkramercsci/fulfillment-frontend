import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchesContainerComponent } from './batches-container.component';

describe('BatchesContainerComponent', () => {
  let component: BatchesContainerComponent;
  let fixture: ComponentFixture<BatchesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchesContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatchesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
