import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DockScreen } from './dockScreen';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Dock } from 'primeng/dock';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TooltipModule } from 'primeng/tooltip';

describe('Dock', () => {
  let component: DockScreen;
  let fixture: ComponentFixture<DockScreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DockScreen,Dock, RadioButtonModule, CommonModule, FormsModule, TooltipModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DockScreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
