import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/shared/services/category.service';
import { ProductDataService } from 'src/app/shared/services/product-data.service';

@Component({
  selector: 'app-edit-product-form',
  templateUrl: './edit-product-form.component.html',
  styleUrls: ['./edit-product-form.component.css'],
})
export class EditProductFormComponent implements OnInit {
  categories$;
  product: any;
  id: any;

  fileToUpload: any;

  imageUrl: string = '/assets/imgs/noimage.png';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productDataService: ProductDataService
  ) {
    this.categories$ = this.categoryService.getAll();
    this.id = this.route.snapshot.paramMap.get('id');
    // if (this.id) this.productService.get(this.id).take(1).subscribe(p => this.product = p);
    if (this.id) {
      this.product = this.productDataService.get(this.id);
    }
  }

  ngOnInit(): void {}

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

  save() {
    if (this.imageUrl != '/assets/imgs/noimage.png') {
      this.product.imageUrl = this.imageUrl;
    }
    this.productDataService.update(this.id, this.product);
    this.router.navigate(['products']);
  }
}
