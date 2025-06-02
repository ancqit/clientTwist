import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperScreen } from './stepper-screen';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { provideRouter, RouterModule } from '@angular/router';
import { TranslationPipe } from '../../shared/translation-pipe';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('StepperScreen', () => {
  let component: StepperScreen;
  let fixture: ComponentFixture<StepperScreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StepperScreen, 
        MatStepperModule,
        MatButtonModule,
        MatIconModule,
        TranslationPipe,
        RouterModule
      ],
      providers: [
        provideRouter([]), // Provide an empty router configuration
        // If you have specific routes, you can define them here
        provideHttpClient(),
        provideHttpClientTesting() // Add HttpClientTestingModule for testing
]
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
