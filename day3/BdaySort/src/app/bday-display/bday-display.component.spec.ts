 import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BdayDisplayComponent } from './bday-display.component';

describe('BdayDisplayComponent', () => {
  let component: BdayDisplayComponent;
  let fixture: ComponentFixture<BdayDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BdayDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BdayDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
