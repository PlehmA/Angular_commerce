import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [NgbRatingConfig],
  styles:[`
  .star {
    position: relative;
    display: inline-block;
    font-size: 3rem;
    color: #d3d3d3;
  }
  .full {
    color: #ebc634;
  }
  .half {
    position: absolute;
    display: inline-block;
    overflow: hidden;
    color: #ebc634;
  }
`]
})
export class ProductComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    config: NgbRatingConfig,
    private ngxLoader: NgxUiLoaderService
    ) {
      config.max = 5;
      config.readonly = true;
    }

  product: any;
  rating: any;

  ngOnInit(): void {
    this.ngxLoader.start();
    this.activatedRoute.queryParams.subscribe(params => {
      let product_id = params["id"];

      this.http.get("https://fakestoreapi.com/products/" + product_id).subscribe(data => {
        this.product = data;
        this.rating = this.product.rating.rate
        this.ngxLoader.stop();
      });

    });

    

  }

}
