import { Component, OnInit, inject } from "@angular/core";
import { PropsService } from "../../services/props.service";
import { PropComponent } from "../prop/prop.component";

@Component({
    selector: 'app-house-props',
    standalone: true,
    templateUrl: 'props.component.html',
    imports: [PropComponent]
})
export class HouseItemsComponent implements OnInit {
    propsService = inject(PropsService)

    ngOnInit(): void {
        console.log(this.propsService.propsSig());
    }
}