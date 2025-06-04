import { Component, OnInit } from '@angular/core';
import { Toast } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';
import { MessageService } from 'primeng/api';
import { ToastService } from '../../Services/toast-service';

@Component({
  selector: 'app-toast-screen',
  imports: [Toast, ButtonModule, Ripple],
  templateUrl: './toast-screen.html',
  styleUrl: './toast-screen.scss',
  standalone: true,
  providers: [MessageService]
})
/**
 * Represents a toast notification screen component that displays messages to the user.
 * 
 * @remarks
 * The `ToastScreen` component listens for toast messages from the `ToastService` and displays them using the `MessageService`.
 * It supports configurable message types, severities, durations, and positions.
 * 
 * @example
 * // Display a success toast notification
 * this.typeMessageSeverity = 'success';
 * this.typeMessageSummary = 'Success';
 * this.typeMessage = 'Operation completed successfully.';
 * this.typeDuration = 3000;
 * this.showToast();
 * 
 * @public
 */
export class ToastScreen implements OnInit {
  /**
   * Specifies the type of label to display on the toast screen.
   * 
   * - `'Success'`: Indicates a successful operation.
   * - `'info'`: Provides informational messages.
   * - `'Warn'`: Warns the user about a potential issue.
   * - `'Error'`: Indicates an error has occurred.
   * 
   * Defaults to `'Error'`.
   */
  typeLabel: 'Success' | 'info' | 'Warn' | 'Error' = 'Error';
  /**
   * Specifies the severity level of the toast notification.
   * 
   * - `'success'`: Indicates a successful operation.
   * - `'info'`: Provides informational messages.
   * - `'warn'`: Warns about a potential issue.
   * - `'danger'`: Signals an error or critical problem.
   * 
   * Defaults to `'danger'`.
   */
  typeSeverity: 'success' | 'info' | 'warn' | 'danger' = 'danger';
  /**
   * Specifies the severity level of a message to be displayed in the toast screen.
   * 
   * - `'success'`: Indicates a successful operation.
   * - `'info'`: Provides informational messages.
   * - `'warn'`: Warns about a potential issue.
   * - `'error'`: Indicates an error has occurred.
   * 
   * Defaults to `'error'`.
   */
  typeMessageSeverity: 'success' | 'info' | 'warn' | 'error' = 'error';
  /**
   * Specifies the summary type of the message to be displayed in the toast screen.
   * 
   * Possible values are:
   * - `'Success'`: Indicates a successful operation.
   * - `'Info'`: Provides informational messages.
   * - `'Warn'`: Warns about potential issues.
   * - `'Error'`: Indicates an error has occurred.
   * 
   * Defaults to `'Error'`.
   */
  typeMessageSummary: 'Success' | 'Info' | 'Warn' | 'Error' = 'Error';
  /**
   * The message to be displayed in the toast notification.
   * @default 'This is a message'
   */
  typeMessage: string = 'This is a message';
  /**
   * The duration in milliseconds for which the toast message is displayed.
   * Defaults to 3000ms (3 seconds).
   */
  typeDuration: number = 3000;
  /**
   * Specifies the position of the toast notification on the screen.
   * 
   * - `'top-left'`: Displays the toast at the top left corner.
   * - `'top-right'`: Displays the toast at the top right corner.
   * - `'bottom-left'`: Displays the toast at the bottom left corner.
   * - `'bottom-right'`: Displays the toast at the bottom right corner.
   * 
   * Defaults to `'top-right'`.
   */
  typePosition: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' = 'top-right';
  /**
   * Creates an instance of the component.
   * 
   * @param messageService - Service for handling application messages.
   * @param toastService - Service for displaying toast notifications.
   */
  constructor(private messageService: MessageService, private toastService: ToastService) { }
  /**
   * Angular lifecycle hook that is called after the component's data-bound properties have been initialized.
   * Subscribes to the toastService to listen for toast messages and triggers the display of a toast notification when a message is received.
   */
  ngOnInit() {
    this.toastService.getToast().subscribe(message => {
      // Handle the toast message here
      this.showToast();
      // e.g., show a toast notification
    });
  }
  /**
   * Displays a toast notification using the configured message properties.
   *
   * @remarks
   * This method utilizes the `messageService` to show a toast with the specified severity, summary, detail, and duration.
   *
   * @example
   * // Show a success toast
   * this.typeMessageSeverity = 'success';
   * this.typeMessageSummary = 'Success';
   * this.typeMessage = 'Operation completed successfully.';
   * this.typeDuration = 3000;
   * this.showToast();
   */
  showToast() {
    this.messageService.add({ severity: this.typeMessageSeverity, summary: this.typeMessageSummary, detail: this.typeMessage, life: this.typeDuration });
  }
}
