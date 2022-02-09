import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenderTimelineComponent } from './tender-timeline.component';

describe('TenderTimelineComponent', () => {
  let component: TenderTimelineComponent;
  let fixture: ComponentFixture<TenderTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenderTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenderTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
