import { Component, OnChanges, OnInit, SimpleChanges, computed, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../types/cartItem.interface';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-cart-items',
  standalone: true,
  imports: [ItemComponent],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss'
})
export class ItemsComponent {
  cartService = inject(CartService)

  items: CartItem[] = []

  visibleItems = this.cartService.cartSig()

}
