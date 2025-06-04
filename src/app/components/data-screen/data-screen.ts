import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastScreen } from "../../shared/toast-screen/toast-screen";
import { ToastService } from '../../Services/toast-service';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-data-screen',
  imports: [RouterModule, ToastScreen,MatTabsModule],
  templateUrl: './data-screen.html',
  styleUrl: './data-screen.scss',
  standalone: true,
  providers: [ToastService]
})

export class DataScreen {
  /**
   * Creates an instance of the DataScreen component.
   * @param toastService - Service used to display toast notifications.
   */
  constructor(private toastService: ToastService) { }
/**
 * Triggers a toast notification with a predefined message.
 *
 * This method utilizes the `toastService` to emit a toast notification.
 * It can be called to provide user feedback or alerts from this component.
 *
 * @remarks
 * You can customize the message or extend the logic as needed.
 */
trigger() {
    // This method can be used to trigger a toast notification
    // You can implement the logic to show a toast here
    this.toastService.emitToast('Hello from another component!');
  }
}
