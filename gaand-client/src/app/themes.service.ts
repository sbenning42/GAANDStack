import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {

  api = 'https://hubspectacles.zento.fr/api/v1/themes';

  constructor(private http: HttpClient) { }

  fetch() {
    return this.http.get(this.api);
  }

  sync() {
  }
}
