import { Component, OnInit } from "@angular/core";
import { ProductService } from "../services/product.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    if (localStorage.getItem("productsCount") !== null) {
      this.productService.productsCount = JSON.parse(
        localStorage.getItem("productsCount")
      );
    }
  }
}
