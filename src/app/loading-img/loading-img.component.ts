import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Route, RouterLink,RouterLinkActive,RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-loading-img',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterOutlet, CommonModule],
  templateUrl: './loading-img.component.html',
  styleUrl: './loading-img.component.css'
})
export class LoadingImgComponent {

}
