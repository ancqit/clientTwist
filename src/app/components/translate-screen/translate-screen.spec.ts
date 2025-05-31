import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateScreen } from './translate-screen';

describe('TranslateScreen', () => {
  let component: TranslateScreen;
  let fixture: ComponentFixture<TranslateScreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateScreen]
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
