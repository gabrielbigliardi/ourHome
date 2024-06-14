import { Component, Input, OnInit, inject } from "@angular/core";
import { PropItem } from "../../types/prop.interface";
import { PropsService } from "../../services/props.service";
import { PropsFirebaseService } from "../../services/propsFirebase.service";

@Component({
    selector: 'app-house-prop',
    standalone: true,
    templateUrl: 'prop.component.html',
    styleUrl: 'prop.component.scss'
})
export class PropComponent {
    @Input({ required: true }) propItem!: PropItem;
    propsService = inject(PropsService)
    propsFirebaseService = inject(PropsFirebaseService)

    removeProp(): void {
        this.propsFirebaseService.removeProp(this.propItem.id).subscribe(() => {
            this.propsService.removeProp(this.propItem.id)
        })
    }
}