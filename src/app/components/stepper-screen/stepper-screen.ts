import { Component, inject } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TranslationPipe } from '../../shared/translation-pipe';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-stepper-screen',
  imports: [MatStepperModule,
    MatButtonModule,
    MatIconModule,
    TranslationPipe,
    RouterModule
  ],
  templateUrl: './stepper-screen.html',
  styleUrl: './stepper-screen.scss',
  standalone: true

})
export class StepperScreen {

}
