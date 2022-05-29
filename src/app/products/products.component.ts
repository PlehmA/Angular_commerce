import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private ngxLoader: NgxUiLoaderService
    ) {}
  productos: any;

  ngOnInit() {
    this.ngxLoader.start();
    this.http.get("https://fakestoreapi.com/products").subscribe(data => {
      this.productos = data;
      this.ngxLoader.stop();
    });
  }

}
