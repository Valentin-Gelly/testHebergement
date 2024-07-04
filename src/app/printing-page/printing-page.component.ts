import { Component } from '@angular/core';
import { RouterLink,RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-printing-page',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterOutlet, CommonModule],
  templateUrl: './printing-page.component.html',
  styleUrl: './printing-page.component.css'
})
export class PrintingPageComponent {

}
