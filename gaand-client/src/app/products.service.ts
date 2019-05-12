import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  api = 'https://hubspectacles.zento.fr/api/v1/filter';

  constructor(private http: HttpClient) { }

  fetch() {
    return this.http.get(this.api).pipe(map((products: any[]) => products.slice(0, 10)));
  }

  sync() {
  }
}
