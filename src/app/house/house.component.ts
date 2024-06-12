import { Component } from "@angular/core";
import { InputComponent } from "./components/input/input.component";
import { HouseItemsComponent } from "./components/props/props.component";

@Component({
    selector: 'app-house',
    templateUrl: './house.component.html',
    standalone: true,
    imports: [InputComponent, HouseItemsComponent]
})
export class HouseComponent {

}