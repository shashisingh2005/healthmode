import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthmodeComponent } from './healthmode.component';

describe('HealthmodeComponent', () => {
  let component: HealthmodeComponent;
  let fixture: ComponentFixture<HealthmodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthmodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthmodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
