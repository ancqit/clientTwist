import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { BaseComponent } from "./home/base/base.component";
import { MessageService } from 'primeng/api';
import { TerminalService } from 'primeng/terminal';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BaseComponent],
  providers: [MessageService, TerminalService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // title = 'clientTwist';
}
