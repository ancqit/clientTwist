import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/**
 * Service for emitting and subscribing to toast notification messages.
 * 
 * The `ToastService` provides a simple mechanism for components to display toast notifications
 * by emitting messages through an observable stream. Components can subscribe to this service
 * to receive and display toast messages throughout the application.
 *
 * @example
 * // Inject ToastService and emit a toast message
 * this.toastService.emitToast('Operation successful!');
 *
 * @example
 * // Subscribe to toast messages
 * this.toastService.getToast().subscribe(message => {
 *   // Display the toast message
 * });
 */
export class ToastService {
  /**
   * Subject used to emit toast notification messages as strings.
   * Components can subscribe to this subject to receive and display toast notifications.
   * 
   * @private
   */
  private toastSubject = new Subject<string>();

  constructor() { }

  /**
   * Emits a toast notification with the specified message.
   *
   * @param message - The message to display in the toast notification.
   */
  emitToast(message: string): void {
    this.toastSubject.next(message);
  }

  /**
   * Returns an observable that emits toast messages as strings.
   *
   * @returns {Observable<string>} An observable stream of toast messages.
   */
  getToast(): Observable<string> {
    return this.toastSubject.asObservable();
  }
}
