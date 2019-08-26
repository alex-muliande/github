import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithomeComponent } from './githome.component';

describe('GithomeComponent', () => {
  let component: GithomeComponent;
  let fixture: ComponentFixture<GithomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
