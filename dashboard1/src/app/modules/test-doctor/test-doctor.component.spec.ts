import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDoctorComponent } from './test-doctor.component';

describe('TestDoctorComponent', () => {
  let component: TestDoctorComponent;
  let fixture: ComponentFixture<TestDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
