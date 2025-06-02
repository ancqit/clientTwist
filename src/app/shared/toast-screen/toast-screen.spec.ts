import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastScreen } from './toast-screen';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';
import { Toast } from 'primeng/toast';

describe('ToastScreen', () => {
  let component: ToastScreen;
  let fixture: ComponentFixture<ToastScreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastScreen, Toast, ButtonModule, Ripple],
      providers: [MessageService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ToastScreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
