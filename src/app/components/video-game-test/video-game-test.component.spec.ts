import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoGameTestComponent } from './video-game-test.component';

describe('VideoGameTestComponent', () => {
  let component: VideoGameTestComponent;
  let fixture: ComponentFixture<VideoGameTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoGameTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoGameTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
