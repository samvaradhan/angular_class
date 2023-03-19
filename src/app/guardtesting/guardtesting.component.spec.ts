import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardtestingComponent } from './guardtesting.component';

describe('GuardtestingComponent', () => {
  let component: GuardtestingComponent;
  let fixture: ComponentFixture<GuardtestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardtestingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardtestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
