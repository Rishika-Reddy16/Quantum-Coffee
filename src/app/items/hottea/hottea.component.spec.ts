import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotteaComponent } from './hottea.component';

describe('HotteaComponent', () => {
  let component: HotteaComponent;
  let fixture: ComponentFixture<HotteaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotteaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotteaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
