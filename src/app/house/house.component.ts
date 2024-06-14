import { Component, OnInit, inject } from "@angular/core";
import { InputComponent } from "./components/input/input.component";
import { HouseItemsComponent } from "./components/props/props.component";
import { PropsService } from "./services/props.service";
import { PropsFirebaseService } from "./services/propsFirebase.service";

@Component({
    selector: 'app-house',
    templateUrl: './house.component.html',
    styleUrl: './house.component.scss',
    standalone: true,
    imports: [InputComponent, HouseItemsComponent]
})
export class HouseComponent implements OnInit {
    propsService = inject(PropsService)
    propsFirebaseService = inject(PropsFirebaseService)

    ngOnInit(): void {
        this.propsFirebaseService.getProps().subscribe(props => {
            this.propsService.propsSig.set(props)
        })
    }
}