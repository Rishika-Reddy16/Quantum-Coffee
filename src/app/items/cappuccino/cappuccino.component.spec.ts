import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CappuccinoComponent } from './cappuccino.component';

describe('CappuccinoComponent', () => {
  let component: CappuccinoComponent;
  let fixture: ComponentFixture<CappuccinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CappuccinoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CappuccinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
