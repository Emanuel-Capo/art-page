import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiredComponent } from './fired.component';

describe('FiredComponent', () => {
  let component: FiredComponent;
  let fixture: ComponentFixture<FiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiredComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
