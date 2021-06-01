import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/shared/models/product';
import { CategoryService } from 'src/app/shared/services/category.service';
import { ProductDataService } from 'src/app/shared/services/product-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.css'],
})
export class AddProductFormComponent implements OnInit {
  categories: Array<String> = [];
  product: Product = {
    $key: '',
    title: '',
    price: 0,
    category: '',
    imageUrl: '',
  };
  fileToUpload: any;

  imageUrl: string = '/assets/imgs/noimage.png';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productDataService: ProductDataService
  ) {
    this.categories = categoryService.getAll();
  }

  ngOnInit(): void {}

  addProduct(product: any) {
    // this.product.$key = (
    //   this.productDataService.getAll().length + 1
    // ).toString();
    this.product.title = product.title;
    this.product.price = product.price;
    this.product.category = product.category;
    this.product.imageUrl = this.imageUrl;
    console.log(this.product);

    Swal.fire({
      title: 'Are you sure you want to add the product?',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.value) {
        this.productDataService
          .addProduct(this.product)
          .subscribe((response) => {
            //acknowledgement
          });
        Swal.fire('Product Added Successfully!', 'success');
        this.router.navigate(['products']);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'The New Product was Cancelled', 'error');
        this.router.navigate(['products']);
      }
    });
  }

  handleFileInput(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      this.fileToUpload = fileList.item(0);
    }
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
  }
}
