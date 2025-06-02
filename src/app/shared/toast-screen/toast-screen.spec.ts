import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastScreen } from './toast-screen';

describe('ToastScreen', () => {
  let component: ToastScreen;
  let fixture: ComponentFixture<ToastScreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastScreen]
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
