import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutcCardComponent } from './produtc-card.component';

describe('ProdutcCardComponent', () => {
  let component: ProdutcCardComponent;
  let fixture: ComponentFixture<ProdutcCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutcCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutcCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
