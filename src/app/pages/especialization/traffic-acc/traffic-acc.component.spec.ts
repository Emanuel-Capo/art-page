import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficAccComponent } from './traffic-acc.component';

describe('TrafficAccComponent', () => {
  let component: TrafficAccComponent;
  let fixture: ComponentFixture<TrafficAccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrafficAccComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrafficAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
