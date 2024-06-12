import { Injectable, signal } from "@angular/core";
import { Prop } from "../types/prop.interface";

@Injectable({
    providedIn: 'root'
})
export class PropsService {
    propsSig = signal<Prop[]>([])

    addProp(newProp: string, priority: string, purchased: boolean, newPropId: string): void {
        const newToAdd: Prop = {
            name: newProp,
            priority: priority,
            purchased: purchased,
            id: newPropId
        }
        this.propsSig.update(prev => [...prev, newToAdd])
        console.log('prop added');

    }
}