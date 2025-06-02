import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutScreen } from './about-screen';
import'zone.js';
import { RouterModule } from '@angular/router';

describe('AboutScreen', () => {
  let component: AboutScreen;
  let fixture: ComponentFixture<AboutScreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutScreen,RouterModule.forRoot([])] // Use RouterModule.forRoot with an empty array for testing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutScreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
