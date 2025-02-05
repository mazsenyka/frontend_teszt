import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // This must match the selector in your `index.html`
  standalone: false,
  templateUrl: './app.component.html', // Ensure this points to the correct file
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'adoption-portal'; // Optional, not critical for now
}
