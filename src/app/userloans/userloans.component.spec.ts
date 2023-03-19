import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserloansComponent } from './userloans.component';

describe('UserloansComponent', () => {
  let component: UserloansComponent;
  let fixture: ComponentFixture<UserloansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserloansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserloansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
