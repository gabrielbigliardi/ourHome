import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'our-cart';
}
