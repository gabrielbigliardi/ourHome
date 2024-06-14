import { Component, inject } from "@angular/core";
import { PropsService } from "../../services/props.service";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";

import { PropItem } from "../../types/prop.interface";
import { PropsFirebaseService } from "../../services/propsFirebase.service";

@Component({
    selector: 'app-house-input',
    templateUrl: 'input.component.html',
    styleUrl: './input.component.scss',
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule]
})
export class InputComponent {
    propsService = inject(PropsService)
    propsFirebaseService = inject(PropsFirebaseService)
    propName = 'test'

    applyForm = new FormGroup({
        name: new FormControl('')
    })

    submitProp() {
        console.log(this.applyForm.value);
        this.propsFirebaseService.addProp(this.applyForm.value.name ?? "").subscribe(addedPropId => {
            this.propsService.addProp(this.applyForm.value.name ?? '', addedPropId)
        })

    }
}