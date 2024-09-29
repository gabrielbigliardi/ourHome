import { Component, OnChanges, SimpleChanges, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartFirebaseService } from '../../services/cartFirebase.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  cartService = inject(CartService)
  cartFirebaseService = inject(CartFirebaseService)
  text: string = ''

  constructor(
    private toastr: ToastrService
  ) { }

  changeText(event: Event): void {
    const target = event.target as HTMLInputElement
    this.text = target.value
  }

  addItem() {

    if (this.text === '') {
      this.toastr.error('Tente inserir um item.', 'Pera lá! 🖐️', {
        positionClass: 'toast-top-center',

      })

    } else {
      this.cartFirebaseService.addItem(this.text).subscribe(addedCartId => {
        this.cartService.addItem(this.text, addedCartId)

      })
      this.text = ''
    }
  }
}
