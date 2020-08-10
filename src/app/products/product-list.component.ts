import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";

@Component({
    selector: "pm-products",
    templateUrl: "./product-list.component.html",
    styleUrls: ["./product-list.component.css"]
})

export class ProductListComponent implements OnInit{
    pageTitle: string = "Product List";
    imageWidth: number = 100;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = "title";
    products: IProduct[] = [
            {
              "productId": 1,
              "productName": "Ulysses",
              "Author": "James Joyce",
              "productCode": "GDN-0011",
              "releaseDate": "1922",
              "description": "Ulysses chronicles the peripatetic appointments and encounters of Leopold Bloom in Dublin in the course of an ordinary day, 16 June 1904",
              "price": 19.95,
              "starRating": 5.0,
              "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/ab/JoyceUlysses2.jpg"
            },
            {
                "productId": 2,
                "productName": "The Great Gatsby",
                "Author": "F. Scott Fitzgerald",
                "productCode": "GDN-0023",
                "releaseDate": "1925",
                "description": "Set in Jazz Age New York, the novel tells the tragic story of Jay Gatsby, a self-made millionaire, and his pursuit of Daisy Buchanan, a wealthy young woman whom he loved in his youth",
                "price": 9.95,
                "starRating": 4.5,
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a0/The_Great_Gatsby_cover_1925_%281%29.jpg"
            },
            {
                "productId": 3,
                "productName": "Winter of Fire",
                "Author": "Sherryl Jordan",
                "productCode": "GDN-0033",
                "releaseDate": "1933",
                "description": "todo",
                "price": 4.95,
                "starRating": 5,
                "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/81B2xmUcGbL.jpg"
            }     
              
        ];

        toggleImage(): void {
            this.showImage = !this.showImage;
        }
        ngOnInit(): void {
            console.log("In OnItit");
    }
}