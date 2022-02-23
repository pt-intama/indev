import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDbComponent } from './create-db.component';

describe('CreateDbComponent', () => {
  let component: CreateDbComponent;
  let fixture: ComponentFixture<CreateDbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
