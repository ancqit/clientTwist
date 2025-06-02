import { Component, inject } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-stepper-screen',
  imports: [MatStepperModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './stepper-screen.html',
  styleUrl: './stepper-screen.scss',
  standalone: true
  
})
export class StepperScreen {  

}
