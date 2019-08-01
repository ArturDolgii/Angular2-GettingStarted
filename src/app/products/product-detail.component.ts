import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
    templateUrl: "product-detail.component.html"
})
export class ProductDetailComponent {
    pageTitle = "Product Detail";

    constructor(private route: ActivatedRoute) {
        this.route.paramMap.subscribe(params => {
            this.pageTitle += ": " + params.get("productId");
        });
    }
}
