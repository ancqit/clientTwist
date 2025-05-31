import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '../Services/translate-service';
import { Observable } from 'rxjs';

@Pipe({
  name: 'translation',
  pure: false
})
export class TranslationPipe implements PipeTransform {
  constructor(private translateService: TranslateService) {}

  transform(key: string): string {
    return this.translateService.getValueByKey(key);
    // return this.translateService.getKeyByValues(key);
  }
}
