import { Component, OnInit, inject } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";
import { ItemsComponent } from "./components/items/items.component";
import { CartService } from "./services/cart.service";
import { CartFirebaseService } from "./services/cartFirebase.service";

@Component({
    selector: 'app-cart',
    templateUrl: 'cart.component.html',
    styleUrl: 'cart.component.scss',
    standalone: true,
    imports: [HeaderComponent, ItemsComponent]
})
export class CartComponent implements OnInit {
    cartService = inject(CartService)
    cartFirebaseService = inject(CartFirebaseService)

    ngOnInit() {

        this.cartFirebaseService.getCart().subscribe(items => {
            this.cartService.cartSig.set(items)
        })

    }

}