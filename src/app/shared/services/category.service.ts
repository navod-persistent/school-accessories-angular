import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categoryList: Array<String> = [];
  constructor(private http: HttpClient) {
    this.categoryList = new Array<String>();
    this.categoryList.push('Pencil');
    this.categoryList.push('Pen');
    this.categoryList.push('Pencil case');
    this.categoryList.push('Pencil holder');
    this.categoryList.push('Book');
    this.categoryList.push('Sticky notes');
    this.categoryList.push('Bag');
    this.categoryList.push('Shoes');
    this.categoryList.push('Umbrella');
    this.categoryList.push('Pencil sharpner');
  }

  getAll() {
    // return this.db.list('/categories', {
    //   query: {
    //     orderByChild: 'name'
    //   }
    // });
    return this.categoryList;
  }
}
