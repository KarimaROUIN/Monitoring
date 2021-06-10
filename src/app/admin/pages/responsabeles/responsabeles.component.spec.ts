import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsabelesComponent } from './responsabeles.component';

describe('ResponsabelesComponent', () => {
  let component: ResponsabelesComponent;
  let fixture: ComponentFixture<ResponsabelesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsabelesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsabelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
