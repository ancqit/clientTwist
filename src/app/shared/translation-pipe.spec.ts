import { TranslateService } from '../Services/translate-service';
import { TranslationPipe } from './translation-pipe';

describe('TranslationPipe', () => {
  it('create an instance', () => {
    // Provide a mock HttpClient using jasmine.createSpyObj
    const httpClientMock = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);
    const translateService = new TranslateService(httpClientMock);
    const pipe = new TranslationPipe(translateService);
    expect(pipe).toBeTruthy();
  });
});
