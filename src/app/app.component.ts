import {Component} from "@angular/core";
import {ProductService} from "./products/product.service";

@Component({
    selector: "pm-app",
    templateUrl: "app-component.html",
    providers: [ProductService]
})
export class AppComponent {
    pageTitle = "Acme Product Management";
}
