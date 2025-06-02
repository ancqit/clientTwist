import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataScreen } from './data-screen';
import { provideRouter, RouterModule } from '@angular/router';
import { ToastService } from '../../Services/toast-service';
import { ToastScreen } from '../../shared/toast-screen/toast-screen';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('DataScreen', () => {
  let component: DataScreen;
  let fixture: ComponentFixture<DataScreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataScreen, RouterModule, ToastScreen],
      providers: [ToastService,       
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting() // Add HttpClientTestingModule for testing
]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DataScreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
