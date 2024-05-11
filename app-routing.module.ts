import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductsComponent } from "./products/products.component";
import { ProductComponent } from "./product/product.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { ConfirmationComponent } from "./confirmation/confirmation.component";
import { HomeComponent } from "./home/home.component";
import { ClothingComponent } from "./clothing/clothing.component";
import { ComponentsComponent } from "./components/components.component";
import { AccessoriesComponent } from "./accessories/accessories.component";
import { BikesComponent } from "./bikes/bikes.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "products", component: ProductsComponent },
  { path: "product", component: ProductComponent },
  { path: "shopping-cart", component: ShoppingCartComponent },
  { path: "checkout", component: CheckoutComponent },
  { path: "bikes", component: BikesComponent },
  { path: "components", component: ComponentsComponent },
  { path: "clothing", component: ClothingComponent },
  { path: "accessories", component: AccessoriesComponent },
  { path: "confirmation", component: ConfirmationComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
      onSameUrlNavigation: "reload",
      scrollPositionRestoration: "enabled",
      scrollOffset: [0, 0],
      anchorScrolling: "enabled",
      useHash: true,
      initialNavigation: "enabledBlocking",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
