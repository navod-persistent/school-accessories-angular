import { ProductDataService } from './../../services/product-data.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input('product') product: Product;
  isAdmin: Boolean = true;

  constructor(
    private router: Router,
    private prodcutDataService: ProductDataService // private authService: AuthService
  ) {}

  ngOnInit(): void {
    // isAdmin = authService.
  }

  delete(pid: string) {
    Swal.fire({
      title: 'Are you sure you want to delete the product?',
      showCancelButton: true,
      confirmButtonText: 'yes',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.value) {
        this.prodcutDataService.delete(pid);
        Swal.fire('Product Deletion Successfully!', 'success');
        this.router.navigate(['products']);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'The Product Deletion was Cancelled', 'error');
        this.router.navigate(['products']);
      }
    });
  }

  editproduct(pid: string) {
    this.router.navigate(['edit-product/' + pid]);
  }
}
