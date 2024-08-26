import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonToggleModule } from "@angular/material/button-toggle";  // Corrected import

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,  // Add CommonModule here
    RouterOutlet,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    MatButtonToggleModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'map-tool';
  panels: { title: string }[] = []; // Array to hold the panels

  // Method to add a new panel
  addPanel() {
    const panelTitle = prompt('Enter the title for the new panel:');
    if (panelTitle) {
      this.panels.push({ title: panelTitle });
    }
  }
}
