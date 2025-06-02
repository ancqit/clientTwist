import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastScreen } from "../../shared/toast-screen/toast-screen";
import { ToastService } from '../../Services/toast-service';

@Component({
  selector: 'app-data-screen',
  imports: [RouterModule, ToastScreen],
  templateUrl: './data-screen.html',
  styleUrl: './data-screen.scss',
  standalone: true,
  providers: [ToastService]
})
export class DataScreen {
  constructor(private toastService: ToastService) { }
trigger() {
    // This method can be used to trigger a toast notification
    // You can implement the logic to show a toast here
    console.log('Toast triggered');
    this.toastService.emitToast('Hello from another component!');
  }
}
