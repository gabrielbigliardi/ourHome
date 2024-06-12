import { Injectable, signal } from "@angular/core";
import { CartItem } from "../types/cartItem.interface";

@Injectable({
    providedIn: 'root'
})
export class CartService {
    cartSig = signal<CartItem[]>([])

    addItem(newItem: string, newItemId: string): void {
        const newToAdd: CartItem = {
            name: newItem,
            id: newItemId
        }
        this.cartSig.update((items) => [...items, newToAdd])
        // console.log('item added');
        // console.log(this.cartSig());
    }

    removeItem(id: string): void {
        this.cartSig.update(items => items.filter(item => item.id !== id))
    }
}