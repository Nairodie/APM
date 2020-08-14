import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";

import { IProduct } from "./product";

@Injectable({
    providedIn: "root"
})
// recomended way to use http is to encapsulate it in a service like so.
export class ProductService {
    private productUrl = "api/products/products.json"

    constructor(private http: HttpClient) {}
    //expose observable for use
    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl).pipe(
            tap(data => console.log("All: " + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = "";
        if (err.error instanceof ErrorEvent) {
            //client-side or network error occured
            errorMessage = `An error occured: ${err.error.message}`;
        } else {
            //backend returned unsuccessful response code.
            errorMessage = `Server returned code ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}