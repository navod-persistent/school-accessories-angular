import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/models/product';
import { ProductDataService } from 'src/app/shared/services/product-data.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Array<Product>;
  filteredProducts: Product[] = [];
  category: string;
  constructor(
    private route: ActivatedRoute,
    private productDataService: ProductDataService
  ) {}

  ngOnInit(): void {
    this.populateProducts();
  }

  private populateProducts() {
    // this.productDataService
    //   .getAll()
    //   .pipe(
    //     switchMap((products) => {
    //       this.products = products;
    //       return this.route.queryParamMap;
    //     })
    //   )
    //   .subscribe((params: { get: (arg0: string) => string }) => {
    //     this.category = params.get('category');
    //     this.applyFilter();
    //   });
    this.products = this.productDataService.getAll();
    // console.log(this.products);
    // return this.route.queryParamMap;
  }

  private applyFilter() {
    this.filteredProducts = this.category
      ? this.products.filter((p) => p.category === this.category)
      : this.products;
  }
}
