import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecializationComponent } from './especialization.component';

describe('EspecializationComponent', () => {
  let component: EspecializationComponent;
  let fixture: ComponentFixture<EspecializationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EspecializationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EspecializationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
