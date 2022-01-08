import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Activity3Component } from './activity3.component';

describe('Activity3Component', () => {
  let component: Activity3Component;
  let fixture: ComponentFixture<Activity3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Activity3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Activity3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
