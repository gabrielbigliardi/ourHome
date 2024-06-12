import { Component, inject } from "@angular/core";
import { PropsService } from "../../services/props.service";

@Component({
    selector: 'app-house-input',
    templateUrl: 'input.component.html',
    standalone: true
})
export class InputComponent {
    propsService = inject(PropsService)


}