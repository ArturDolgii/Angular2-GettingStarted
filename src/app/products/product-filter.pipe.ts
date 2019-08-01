import {Pipe, PipeTransform} from "@angular/core";
import {IProduct} from "./products";

@Pipe({
    name: "productFilter"
})
export class ProductFilterPipe implements PipeTransform {
    transform(value: IProduct[], ...args): IProduct[] {
        const filter = args[0] ? args[0].toLocaleLowerCase() : null;

        return filter ? value.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
}
