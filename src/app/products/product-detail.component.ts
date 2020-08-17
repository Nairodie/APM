import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { IProduct } from "./product";

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = "Product Detail";
  product: IProduct;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //let defines a blocked scope variable
    //+ is a JS shortcut to convert the parameter string to a numeric id
    let id = +this.route.snapshot.paramMap.get("id");
    //ES2015 backticks to define a template string and display the id 
    this.pageTitle += `: ${id}`;
    this.product = {
      "productId": id,
      "productName": "Ulysses",
      "Author": "James Joyce",
      "productCode": "gdn-0011",
      "releaseDate": "1922",
      "description": "Ulysses chronicles the peripatetic appointments and encounters of Leopold Bloom in Dublin in the course of an ordinary day, 16 June 1904",
      "price": 19.95,
      "starRating": 5,
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/ab/JoyceUlysses2.jpg",
    }
  }

}
