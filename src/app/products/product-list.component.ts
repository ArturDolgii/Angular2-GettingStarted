import {Component, OnInit} from "@angular/core";
import {IProduct} from "./products";
import {ProductService} from "./product.service";
import {HttpErrorResponse} from "@angular/common/http";

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
    errorMessage: string;

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.productService.getProducts().subscribe(
            products => this.products = products,
            (error: HttpErrorResponse) => this.errorMessage = error.message
        );
    }

    onRatingClicked(message: string): void {
        this.pageTitle = "Product List: " + message;
    }
}
