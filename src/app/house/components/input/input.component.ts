import { Component, OnChanges, SimpleChanges, inject } from "@angular/core";
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
    name: new FormControl(''),
    priority: new FormControl('')
  })


  submitProp() {
    this.propsFirebaseService.addProp(this.applyForm.value.name ?? "", this.applyForm.value.priority ?? '').subscribe(addedPropId => {
      console.log("return from subscribe" + addedPropId);

      this.propsService.addProp(addedPropId, this.applyForm.value.name ?? '', this.applyForm.value.priority ?? '')
    })

  }
}