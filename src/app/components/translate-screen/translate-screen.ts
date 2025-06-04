import { Component } from '@angular/core';
import { TranslateService } from '../../Services/translate-service';
import { TranslationPipe } from '../../shared/translation-pipe';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-translate-screen',
  templateUrl: './translate-screen.html',
  styleUrl: './translate-screen.scss',
  standalone: true,
  imports: [TranslationPipe,RouterModule]
})
/**
 * Represents the translate screen component responsible for handling translation-related functionality.
 *
 * @remarks
 * This class utilizes the {@link TranslateService} to manage translations within the application.
 * It includes a test property for demonstration or testing purposes.
 *
 * @public
 */
export class TranslateScreen {
  /**
   * A test string that may be undefined.
   *
   * @remarks
   * This property is used for testing purposes and can either hold a string value or be undefined.
   */
  test: string | undefined;
  /**
   * Creates an instance of the component and injects the TranslateService.
   * @param translateService - Service responsible for handling translations within the application.
   */
  constructor(public translateService: TranslateService) {   
  }
}
