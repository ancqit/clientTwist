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
export class ToastScreen implements OnInit {
  typeLabel: 'Success' | 'info' | 'Warn' | 'Error' = 'Error';
  typeSeverity: 'success' | 'info' | 'warn' | 'danger' = 'danger';
  typeMessageSeverity: 'success' | 'info' | 'warn' | 'error' = 'error';
  typeMessageSummary: 'Success' | 'Info' | 'Warn' | 'Error' = 'Error';
  typeMessage: string = 'This is a message';
  typeDuration: number = 3000;
  typePosition: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' = 'top-right';
  constructor(private messageService: MessageService, private toastService: ToastService) { }
  ngOnInit() {
    this.toastService.getToast().subscribe(message => {
      // Handle the toast message here
      this.showToast();
      // e.g., show a toast notification
    });
  }
  showToast() {
    this.messageService.add({ severity: this.typeMessageSeverity, summary: this.typeMessageSummary, detail: this.typeMessage, life: this.typeDuration });
  }
}
