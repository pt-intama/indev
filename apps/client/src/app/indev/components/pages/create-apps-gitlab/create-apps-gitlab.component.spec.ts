import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAppsGitlabComponent } from './create-apps-gitlab.component';

describe('CreateAppsGitlabComponent', () => {
  let component: CreateAppsGitlabComponent;
  let fixture: ComponentFixture<CreateAppsGitlabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAppsGitlabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAppsGitlabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
