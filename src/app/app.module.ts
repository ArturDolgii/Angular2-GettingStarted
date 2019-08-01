import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {ProductListComponent} from "./products/product-list.component";
import {FormsModule} from "@angular/forms";
import {ProductFilterPipe} from "./products/product-filter.pipe";
import {StarComponent} from "./shared/star.component";

@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent,
        ProductFilterPipe,
        StarComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
