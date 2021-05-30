import { ProductDataService } from './../../services/product-data.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input()
  product: Product;

  isAdmin: boolean = true;

  constructor(
    private router: Router,
    private prodcutDataService: ProductDataService
  ) {}

  ngOnInit(): void {}

  delete(pid: string) {
    if (!confirm('Are you sure you want to delete this product?')) return;
    this.prodcutDataService.delete(pid);
  }

  editproduct(pid: string) {
    this.router.navigate(['edit-product/' + pid]);
  }
}
