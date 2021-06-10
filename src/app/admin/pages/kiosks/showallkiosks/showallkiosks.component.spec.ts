import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowallkiosksComponent } from './showallkiosks.component';

describe('ShowallkiosksComponent', () => {
  let component: ShowallkiosksComponent;
  let fixture: ComponentFixture<ShowallkiosksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowallkiosksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowallkiosksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
