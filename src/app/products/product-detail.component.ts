import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "./product.service";
import {IProduct} from "./products";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
    templateUrl: "product-detail.component.html"
})
export class ProductDetailComponent implements OnInit {
    pageTitle = "Product Detail";
    product: IProduct;

    constructor(private route: ActivatedRoute,
                private productService: ProductService) {
    }

    ngOnInit(): void {
        this.getProductIdFromRoute().subscribe(productId => {
            this.productService.getProduct(productId).subscribe(product => {
                this.product = product;
            });
        });
    }

    private getProductIdFromRoute(): Observable<number> {
        return this.route.paramMap.pipe(map(params => +params.get("productId")));
    }
}
