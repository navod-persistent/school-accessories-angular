import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/models/product';
import { ProductDataService } from 'src/app/shared/services/product-data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  constructor(
    private route: ActivatedRoute,
    private productDataService: ProductDataService
  ) {}

  ngOnInit(): void {
    this.populateProducts();
  }

  private populateProducts() {
    // this.productService
    //   .getAll()
    //   .switchMap(products => {
    //     this.products = products;
    //     return this.route.queryParamMap;
    //   })
    //   .subscribe(params => {
    //     this.category = params.get('category');
    //     this.applyFilter();
    //   });
    this.products = this.productDataService.getAll();
    console.log(this.products);
    return this.route.queryParamMap;
  }
}
