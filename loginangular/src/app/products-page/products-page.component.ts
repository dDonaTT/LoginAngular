import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Product {
  name: string;
  category: string;
  price: string;
  date: string;
}

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent {
  products: Product[] = [];
  dataSource: MatTableDataSource<Product>;
  showAddForm: boolean = false;
  selectedProduct: Product | null = null;
  displayedColumns: string[] = ['name', 'category', 'price', 'date', 'action'];
  message: string = '';

  constructor() {
    this.dataSource = new MatTableDataSource<Product>(this.products);
  }

  addProduct() {
    const newProduct: Product = { name: '', category: '', price: '', date: '' };
    this.products.push(newProduct);
    this.selectedProduct = newProduct;
    this.showAddForm = true;
    this.dataSource = new MatTableDataSource<Product>(this.products);
  }

  saveProduct(product: Product) {

    if (product.name && product.category && product.price && product.date) {
      if (!this.products.includes(product)) {
        this.products.push(product);
        this.dataSource = new MatTableDataSource<Product>(this.products);
      }

      console.log('Product added:', product);
      console.log('Updated products:', this.products);
      this.message = 'Product successfully added!';
      this.showAddForm = false;
      this.selectedProduct = null;
    } else {
      this.message = 'Please fill in all fields.';
    }
  }

  editProduct(product: Product) {
    this.selectedProduct = product;
    this.showAddForm = true;
  }

  deleteProduct(product: Product) {
    const index = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
      this.dataSource = new MatTableDataSource<Product>(this.products);
      console.log('Product deleted:', product);
      console.log('Updated products:', this.products);
    }
  }

  cancelForm() {
    if (this.selectedProduct && this.products.includes(this.selectedProduct)) {
      const index = this.products.indexOf(this.selectedProduct);
      if (index !== -1) {
        this.products.splice(index, 1);
        this.dataSource = new MatTableDataSource<Product>(this.products);
        console.log('Product deleted:', this.selectedProduct);
        console.log('Updated products:', this.products);
      }
    }
    this.showAddForm = false;
    this.selectedProduct = null;
    this.message = '';
  }
}
