import { ProductDataService } from './../../services/product-data.service';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input()
  product: Product;

  isAdmin: boolean = true;

  @Output()
  delete = new EventEmitter<string>();

  constructor(
    private router: Router,
    private prodcutDataService: ProductDataService // private authService: AuthService
  ) {}

  ngOnInit(): void {
    // isAdmin = authService.
  }

  deleteProduct(pid: string) {
    Swal.fire({
      title: 'Are you sure you want to delete the product?',
      showCancelButton: true,
      confirmButtonText: 'yes',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.value) {
        this.delete.emit(pid);
        Swal.fire('Product Deletion Successfully!', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'The Product Deletion was Cancelled', 'error');
      }
    });
  }
  editproduct(pid: string) {
    this.router.navigate(['admin/edit-product/' + pid]);
  }

  addToCart(pid: string) {
    this.router.navigate(['shopping-cart']);
  }
}
