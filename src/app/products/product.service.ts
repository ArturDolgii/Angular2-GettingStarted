import {IProduct} from "./products";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable()
export class ProductService {
    private productUrl = "/api/products/products.json";

    constructor(private http: HttpClient) {
        this.http = http;
    }

    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl);
    }

    getProduct(productId: number): Observable<IProduct> {
        return this.getProducts().pipe(
            map((value: IProduct[]) => value.find(item => item.productId === productId))
        );
    }
}
