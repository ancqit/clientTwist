import { Component } from '@angular/core';
import { TranslateService } from '../../Services/translate-service';
import { TranslationPipe } from '../../shared/translation-pipe';

@Component({
  selector: 'app-translate-screen',
  templateUrl: './translate-screen.html',
  styleUrl: './translate-screen.scss',
  standalone: true,
  imports: [TranslationPipe]
})
export class TranslateScreen {
  test: string | undefined;
  constructor(public translateService: TranslateService) {   
  }
}
