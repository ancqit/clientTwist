import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateScreen } from './translate-screen';
import { TranslationPipe } from '../../shared/translation-pipe';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter, RouterModule } from '@angular/router';

describe('TranslateScreen', () => {
  let component: TranslateScreen;
  let fixture: ComponentFixture<TranslateScreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateScreen,TranslationPipe,RouterModule.forRoot([])], // Provide an empty router configuration
      providers: [
        provideHttpClient(),
        provideHttpClientTesting() // Add HttpClientTestingModule for testing
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranslateScreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
