import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ProductGQL, CreateProductGQL, ThemeGQL, Theme, AddProductRelatedToGQL, AddArtistPerfomsAtGQL, AddArtistRelatedToGQL, CreateArtistGQL } from '../graphql';
import { switchMap, take, map, tap } from 'rxjs/operators';
import { concat, zip, empty } from 'rxjs';
import { ApolloQueryResult } from 'apollo-client';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit() {
  }

}
