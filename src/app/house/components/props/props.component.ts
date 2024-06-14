import { Component, OnInit, inject } from "@angular/core";
import { PropsService } from "../../services/props.service";
import { PropComponent } from "../prop/prop.component";

@Component({
    selector: 'app-house-props',
    standalone: true,
    templateUrl: 'props.component.html',
    styleUrl: 'props.component.scss',
    imports: [PropComponent]
})
export class HouseItemsComponent {
    propsService = inject(PropsService)

}