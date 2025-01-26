import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffPortalComponent } from './staff-portal.component';

describe('StaffPortalComponent', () => {
  let component: StaffPortalComponent;
  let fixture: ComponentFixture<StaffPortalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaffPortalComponent]
    });
    fixture = TestBed.createComponent(StaffPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
