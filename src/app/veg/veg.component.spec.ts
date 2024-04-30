import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegComponent } from './veg.component';

describe('VegComponent', () => {
  let component: VegComponent;
  let fixture: ComponentFixture<VegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VegComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
