import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisionResultComponent } from './comparision-result.component';

describe('ComparisionResultComponent', () => {
  let component: ComparisionResultComponent;
  let fixture: ComponentFixture<ComparisionResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparisionResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComparisionResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
