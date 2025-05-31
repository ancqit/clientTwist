import { Component } from '@angular/core';
import { TranslateService } from '../../Services/translate-service';

@Component({
  selector: 'app-translate-screen',
  templateUrl: './translate-screen.html',
  styleUrl: './translate-screen.scss',
  standalone: true,
  providers: [TranslateService]
})
export class TranslateScreen {
  test: string | undefined;
  constructor(public translateService: TranslateService) {
    this.translateService.getKeyByValueFromObservable('Hello').subscribe(key => {
  console.log(key); // e.g., "HELLO"
});
this.translateService.getValueByKeyFromObservable('HELLO').subscribe(value => {
  console.log(value); // e.g., "Hello"
  this.test = value;
});
  }
}
