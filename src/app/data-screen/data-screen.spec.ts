import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataScreen } from './data-screen';

describe('DataScreen', () => {
  let component: DataScreen;
  let fixture: ComponentFixture<DataScreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataScreen]
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
