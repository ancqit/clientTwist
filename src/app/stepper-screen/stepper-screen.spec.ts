import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperScreen } from './stepper-screen';

describe('StepperScreen', () => {
  let component: StepperScreen;
  let fixture: ComponentFixture<StepperScreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperScreen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepperScreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
