import { Product } from './../models/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductDataService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    console.log('get-all');
    return this.http.get<any>('http://localhost:8081/admin/get-products');
  }

  addProduct(newProduct: Product): Observable<any> {
    console.log('-----' + newProduct.category);
    return this.http.post(
      'http://localhost:8081/admin/add-product',
      newProduct
    );
  }

  update(newProduct: Product) {
    return this.http.put(
      'http://localhost:8081/admin/update-product',
      newProduct
    );
  }

  delete(pid: number): Observable<any> {
    // console.log('http://localhost:8081/admin/delete-product/' + pid);
    return this.http.delete<any>(
      'http://localhost:8081/admin/delete-product/' + pid
    );
  }

  get(pid: number): Observable<Product> {
    return this.http.get<Product>(
      'http://localhost:8081/admin/get-product/' + pid
    );
  }
}

// this.httpClient.post('http://localhost:8080/image/upload', uploadImageData, { observe: 'response' })
// 34
//       .subscribe((response) => {
// 35
//         if (response.status === 200) {
// 36
//           this.message = 'Image uploaded successfully';
// 37
//         } else {
// 38
//           this.message = 'Image not uploaded successfully';
// 39
//         }
// 40
//       }
// 41
//       );
