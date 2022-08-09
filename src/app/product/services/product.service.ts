import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom, Observable } from "rxjs";
import { map } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class ProductService {
  private readonly apiUrl = environment.apiURL;

  constructor(private http: HttpClient) {}

    getProducts(): Observable<any>{
    return this.http.get(`${this.apiUrl}Products`).pipe(map(response => response));
  }

  async getProducts2(): Promise<any>{
    return await lastValueFrom(this.http.get(`${this.apiUrl}Products`).pipe(map(response => response)));
  }

}
