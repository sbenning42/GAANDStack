import { InMemoryCache } from "apollo-cache-inmemory";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";

import { AppComponent } from './app.component';
import { environment } from "src/environments/environment";
import { ThemesComponent } from './themes/themes.component';
import { ThemesService } from "./themes.service";
import { ProductsComponent } from './products/products.component';
import { ProductsService } from "./products.service";

@NgModule({
  declarations: [
    AppComponent,
    ThemesComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({ uri: environment.gaandServer })
        }
      },
      deps: [HttpLink]
    },
    ThemesService,
    ProductsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}