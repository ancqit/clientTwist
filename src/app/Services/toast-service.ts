import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastSubject = new Subject<string>();

  constructor() { }

  emitToast(message: string): void {
    console.log('Toast message emitted:', message);
    this.toastSubject.next(message);
  }

  getToast(): Observable<string> {
    console.log('Toast message requested');
    return this.toastSubject.asObservable();
  }
}
