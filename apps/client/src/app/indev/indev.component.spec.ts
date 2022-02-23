import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndevComponent } from './indev.component';

describe('IndevComponent', () => {
  let component: IndevComponent;
  let fixture: ComponentFixture<IndevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
