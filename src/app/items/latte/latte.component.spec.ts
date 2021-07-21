import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatteComponent } from './latte.component';

describe('LatteComponent', () => {
  let component: LatteComponent;
  let fixture: ComponentFixture<LatteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
