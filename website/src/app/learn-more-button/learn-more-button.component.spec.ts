import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnMoreButtonComponent } from './learn-more-button.component';

describe('LearnMoreButtonComponent', () => {
  let component: LearnMoreButtonComponent;
  let fixture: ComponentFixture<LearnMoreButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnMoreButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnMoreButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
