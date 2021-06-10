import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddkioskComponent } from './addkiosk.component';

describe('AddkioskComponent', () => {
  let component: AddkioskComponent;
  let fixture: ComponentFixture<AddkioskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddkioskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddkioskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
