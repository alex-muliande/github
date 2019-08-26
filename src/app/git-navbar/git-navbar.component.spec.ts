import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitNavbarComponent } from './git-navbar.component';

describe('GitNavbarComponent', () => {
  let component: GitNavbarComponent;
  let fixture: ComponentFixture<GitNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
