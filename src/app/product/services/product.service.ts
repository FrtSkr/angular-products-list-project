import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom, Observable } from "rxjs";
import { map } from "rxjs";

@Injectable({providedIn: 'root'})
export class ProductService {
  constructor(private http: HttpClient) {}

    getProducts(): Observable<any>{
    return this.http.get('https://demodata.grapecity.com/northwind/odata/v1/Products').pipe(map(response => response));
  }

  async getProducts2(): Promise<any>{
    return await lastValueFrom(this.http.get('https://demodata.grapecity.com/northwind/odata/v1/Products').pipe(map(response => response)));
  }

}
