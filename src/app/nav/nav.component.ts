import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

@Component({
    selector: 'app-nav',
    standalone: true,
    templateUrl: 'nav.component.html',
    styleUrl: 'nav.component.scss',
    imports: [RouterLink, RouterLinkActive, RouterOutlet]
})
export class HeaderComponent {

}