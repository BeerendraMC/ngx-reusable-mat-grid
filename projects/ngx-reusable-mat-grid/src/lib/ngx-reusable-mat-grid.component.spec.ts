import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxReusableMatGridComponent } from './ngx-reusable-mat-grid.component';

describe('NgxReusableMatGridComponent', () => {
  let component: NgxReusableMatGridComponent;
  let fixture: ComponentFixture<NgxReusableMatGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxReusableMatGridComponent]
    });
    fixture = TestBed.createComponent(NgxReusableMatGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
