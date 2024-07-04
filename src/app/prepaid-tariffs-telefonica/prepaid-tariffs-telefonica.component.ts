import { Component } from '@angular/core';
import { RouterLink,RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prepaid-tariffs-telefonica',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterOutlet, CommonModule],
  templateUrl: './prepaid-tariffs-telefonica.component.html',
  styleUrl: './prepaid-tariffs-telefonica.component.css'
})
export class PrepaidTariffsTelefonicaComponent {

}
