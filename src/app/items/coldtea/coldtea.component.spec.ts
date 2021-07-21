import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdteaComponent } from './coldtea.component';

describe('ColdteaComponent', () => {
  let component: ColdteaComponent;
  let fixture: ComponentFixture<ColdteaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColdteaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColdteaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
