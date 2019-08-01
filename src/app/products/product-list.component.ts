import {Component, OnInit} from "@angular/core";
import {IProduct} from "./products";
import {ProductService} from "./product.service";

@Component({
    selector: "pm-products",
    templateUrl: "product-list.component.html",
    styleUrls: ["product-list.component.css"]
})
export class ProductListComponent implements OnInit {
    constructor(private productService: ProductService) {
        this.productService = productService;
    }

    pageTitle = "Product List";
    imageWidth = 50;
    imageMargin = 2;
    showImage = false;
    listFilter: string;
    products: IProduct[];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.products = this.productService.getProducts();
    }

    onRatingClicked(message: string): void {
        this.pageTitle = "Product List: " + message;
    }
}
