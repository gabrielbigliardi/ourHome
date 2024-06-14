import { Injectable, inject } from "@angular/core";
import { Firestore, addDoc, collectionData, deleteDoc, doc } from "@angular/fire/firestore";
import { collection } from "@firebase/firestore";
import { Observable, from } from "rxjs";
import { PropItem } from "../types/prop.interface";

@Injectable({
    providedIn: 'root',
})

export class PropsFirebaseService {
    firestore = inject(Firestore)
    propsCollection = collection(this.firestore, 'props')

    getProps(): Observable<PropItem[]> {
        console.log("getting props");

        return collectionData(this.propsCollection, {
            idField: 'id'
        }) as Observable<PropItem[]>
    }

    addProp(name: string): Observable<string> {
        const propToCreate = { name }
        const promise = addDoc(this.propsCollection, propToCreate).then(res => res.id)
        return from(promise)
    }

    removeProp(propId: string): Observable<void> {
        const docRef = doc(this.firestore, "props/" + propId)
        const promise = deleteDoc(docRef)
        return from(promise)
    }
}