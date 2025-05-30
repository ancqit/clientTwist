import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // This is the main application component.
  // It serves as the root component for the Angular application.
  // The RouterOutlet directive is used to display routed components.
  // The templateUrl and styleUrl properties point to the HTML and CSS files for this component.
}
