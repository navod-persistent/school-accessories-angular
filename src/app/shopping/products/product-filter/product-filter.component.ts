import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css'],
})
export class ProductFilterComponent implements OnInit {
  categories: any;
  @Input('category') category: any;
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categories = this.categoryService.getAll();
  }
}
