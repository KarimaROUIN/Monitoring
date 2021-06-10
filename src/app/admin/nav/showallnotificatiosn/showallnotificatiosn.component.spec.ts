import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowallnotificatiosnComponent } from './showallnotificatiosn.component';

describe('ShowallnotificatiosnComponent', () => {
  let component: ShowallnotificatiosnComponent;
  let fixture: ComponentFixture<ShowallnotificatiosnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowallnotificatiosnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowallnotificatiosnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
