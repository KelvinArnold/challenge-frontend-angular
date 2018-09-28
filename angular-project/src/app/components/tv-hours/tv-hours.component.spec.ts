import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvHoursComponent } from './tv-hours.component';

describe('TvHoursComponent', () => {
  let component: TvHoursComponent;
  let fixture: ComponentFixture<TvHoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvHoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
