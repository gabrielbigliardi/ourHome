import { Injectable, signal } from "@angular/core";
import { PropItem } from "../types/prop.interface";
import { ItemsComponent } from "../../cart/components/items/items.component";

@Injectable({
    providedIn: 'root'
})
export class PropsService {
    propsSig = signal<PropItem[]>([])

    // addProp(newProp: string, priority: string, purchased: boolean, newPropId: string): void {
    addProp(newPropId: string, newProp: string): void {
        const newToAdd: PropItem = {
            id: newPropId,
            name: newProp,
            // priority: priority,
            // purchased: purchased,
        }
        this.propsSig.update(prev => [...prev, newToAdd])
        console.log('prop added');
    }

    removeProp(id: string): void {
        this.propsSig.update(props => props.filter(item => item.id !== id))
    }
}