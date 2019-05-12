export type Maybe<T> = T | null;

export interface _ThemeFilter {
  AND?: Maybe<(Maybe<_ThemeFilter>)[]>;

  OR?: Maybe<(Maybe<_ThemeFilter>)[]>;

  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<string[]>;

  id_not_in?: Maybe<string[]>;

  id_contains?: Maybe<string>;

  id_not_contains?: Maybe<string>;

  id_starts_with?: Maybe<string>;

  id_not_starts_with?: Maybe<string>;

  id_ends_with?: Maybe<string>;

  id_not_ends_with?: Maybe<string>;

  code?: Maybe<string>;

  code_not?: Maybe<string>;

  code_in?: Maybe<string[]>;

  code_not_in?: Maybe<string[]>;

  code_contains?: Maybe<string>;

  code_not_contains?: Maybe<string>;

  code_starts_with?: Maybe<string>;

  code_not_starts_with?: Maybe<string>;

  code_ends_with?: Maybe<string>;

  code_not_ends_with?: Maybe<string>;

  name?: Maybe<string>;

  name_not?: Maybe<string>;

  name_in?: Maybe<string[]>;

  name_not_in?: Maybe<string[]>;

  name_contains?: Maybe<string>;

  name_not_contains?: Maybe<string>;

  name_starts_with?: Maybe<string>;

  name_not_starts_with?: Maybe<string>;

  name_ends_with?: Maybe<string>;

  name_not_ends_with?: Maybe<string>;
}

export interface _ChildThemeFilter {
  AND?: Maybe<(Maybe<_ChildThemeFilter>)[]>;

  OR?: Maybe<(Maybe<_ChildThemeFilter>)[]>;

  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<string[]>;

  id_not_in?: Maybe<string[]>;

  id_contains?: Maybe<string>;

  id_not_contains?: Maybe<string>;

  id_starts_with?: Maybe<string>;

  id_not_starts_with?: Maybe<string>;

  id_ends_with?: Maybe<string>;

  id_not_ends_with?: Maybe<string>;

  code?: Maybe<string>;

  code_not?: Maybe<string>;

  code_in?: Maybe<string[]>;

  code_not_in?: Maybe<string[]>;

  code_contains?: Maybe<string>;

  code_not_contains?: Maybe<string>;

  code_starts_with?: Maybe<string>;

  code_not_starts_with?: Maybe<string>;

  code_ends_with?: Maybe<string>;

  code_not_ends_with?: Maybe<string>;

  name?: Maybe<string>;

  name_not?: Maybe<string>;

  name_in?: Maybe<string[]>;

  name_not_in?: Maybe<string[]>;

  name_contains?: Maybe<string>;

  name_not_contains?: Maybe<string>;

  name_starts_with?: Maybe<string>;

  name_not_starts_with?: Maybe<string>;

  name_ends_with?: Maybe<string>;

  name_not_ends_with?: Maybe<string>;
}

export interface _ArtistFilter {
  AND?: Maybe<(Maybe<_ArtistFilter>)[]>;

  OR?: Maybe<(Maybe<_ArtistFilter>)[]>;

  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<string[]>;

  id_not_in?: Maybe<string[]>;

  id_contains?: Maybe<string>;

  id_not_contains?: Maybe<string>;

  id_starts_with?: Maybe<string>;

  id_not_starts_with?: Maybe<string>;

  id_ends_with?: Maybe<string>;

  id_not_ends_with?: Maybe<string>;

  code?: Maybe<string>;

  code_not?: Maybe<string>;

  code_in?: Maybe<string[]>;

  code_not_in?: Maybe<string[]>;

  code_contains?: Maybe<string>;

  code_not_contains?: Maybe<string>;

  code_starts_with?: Maybe<string>;

  code_not_starts_with?: Maybe<string>;

  code_ends_with?: Maybe<string>;

  code_not_ends_with?: Maybe<string>;

  name?: Maybe<string>;

  name_not?: Maybe<string>;

  name_in?: Maybe<string[]>;

  name_not_in?: Maybe<string[]>;

  name_contains?: Maybe<string>;

  name_not_contains?: Maybe<string>;

  name_starts_with?: Maybe<string>;

  name_not_starts_with?: Maybe<string>;

  name_ends_with?: Maybe<string>;

  name_not_ends_with?: Maybe<string>;
}

export interface _PlaceFilter {
  AND?: Maybe<(Maybe<_PlaceFilter>)[]>;

  OR?: Maybe<(Maybe<_PlaceFilter>)[]>;

  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<string[]>;

  id_not_in?: Maybe<string[]>;

  id_contains?: Maybe<string>;

  id_not_contains?: Maybe<string>;

  id_starts_with?: Maybe<string>;

  id_not_starts_with?: Maybe<string>;

  id_ends_with?: Maybe<string>;

  id_not_ends_with?: Maybe<string>;

  code?: Maybe<string>;

  code_not?: Maybe<string>;

  code_in?: Maybe<string[]>;

  code_not_in?: Maybe<string[]>;

  code_contains?: Maybe<string>;

  code_not_contains?: Maybe<string>;

  code_starts_with?: Maybe<string>;

  code_not_starts_with?: Maybe<string>;

  code_ends_with?: Maybe<string>;

  code_not_ends_with?: Maybe<string>;

  name?: Maybe<string>;

  name_not?: Maybe<string>;

  name_in?: Maybe<string[]>;

  name_not_in?: Maybe<string[]>;

  name_contains?: Maybe<string>;

  name_not_contains?: Maybe<string>;

  name_starts_with?: Maybe<string>;

  name_not_starts_with?: Maybe<string>;

  name_ends_with?: Maybe<string>;

  name_not_ends_with?: Maybe<string>;
}

export interface _ProductFilter {
  AND?: Maybe<(Maybe<_ProductFilter>)[]>;

  OR?: Maybe<(Maybe<_ProductFilter>)[]>;

  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<string[]>;

  id_not_in?: Maybe<string[]>;

  id_contains?: Maybe<string>;

  id_not_contains?: Maybe<string>;

  id_starts_with?: Maybe<string>;

  id_not_starts_with?: Maybe<string>;

  id_ends_with?: Maybe<string>;

  id_not_ends_with?: Maybe<string>;

  code?: Maybe<string>;

  code_not?: Maybe<string>;

  code_in?: Maybe<string[]>;

  code_not_in?: Maybe<string[]>;

  code_contains?: Maybe<string>;

  code_not_contains?: Maybe<string>;

  code_starts_with?: Maybe<string>;

  code_not_starts_with?: Maybe<string>;

  code_ends_with?: Maybe<string>;

  code_not_ends_with?: Maybe<string>;

  type?: Maybe<string>;

  type_not?: Maybe<string>;

  type_in?: Maybe<string[]>;

  type_not_in?: Maybe<string[]>;

  type_contains?: Maybe<string>;

  type_not_contains?: Maybe<string>;

  type_starts_with?: Maybe<string>;

  type_not_starts_with?: Maybe<string>;

  type_ends_with?: Maybe<string>;

  type_not_ends_with?: Maybe<string>;

  name?: Maybe<string>;

  name_not?: Maybe<string>;

  name_in?: Maybe<string[]>;

  name_not_in?: Maybe<string[]>;

  name_contains?: Maybe<string>;

  name_not_contains?: Maybe<string>;

  name_starts_with?: Maybe<string>;

  name_not_starts_with?: Maybe<string>;

  name_ends_with?: Maybe<string>;

  name_not_ends_with?: Maybe<string>;
}

export interface _ChildThemeInput {
  id: string;
}

export interface _ThemeInput {
  id: string;
}

export interface _ArtistInput {
  id: string;
}

export interface _PlaceInput {
  id: string;
}

export interface _ProductInput {
  id: string;
}

export interface _Neo4jDateInput {
  year?: Maybe<number>;

  month?: Maybe<number>;

  day?: Maybe<number>;

  formatted?: Maybe<string>;
}

export interface _Neo4jDateTimeInput {
  year?: Maybe<number>;

  month?: Maybe<number>;

  day?: Maybe<number>;

  hour?: Maybe<number>;

  minute?: Maybe<number>;

  second?: Maybe<number>;

  millisecond?: Maybe<number>;

  microsecond?: Maybe<number>;

  nanosecond?: Maybe<number>;

  timezone?: Maybe<string>;

  formatted?: Maybe<string>;
}

export interface _Neo4jLocalDateTimeInput {
  year?: Maybe<number>;

  month?: Maybe<number>;

  day?: Maybe<number>;

  hour?: Maybe<number>;

  minute?: Maybe<number>;

  second?: Maybe<number>;

  millisecond?: Maybe<number>;

  microsecond?: Maybe<number>;

  nanosecond?: Maybe<number>;

  formatted?: Maybe<string>;
}

export interface _Neo4jLocalTimeInput {
  hour?: Maybe<number>;

  minute?: Maybe<number>;

  second?: Maybe<number>;

  millisecond?: Maybe<number>;

  microsecond?: Maybe<number>;

  nanosecond?: Maybe<number>;

  formatted?: Maybe<string>;
}

export interface _Neo4jTimeInput {
  hour?: Maybe<number>;

  minute?: Maybe<number>;

  second?: Maybe<number>;

  nanosecond?: Maybe<number>;

  millisecond?: Maybe<number>;

  microsecond?: Maybe<number>;

  timezone?: Maybe<string>;

  formatted?: Maybe<string>;
}

export enum _ThemeOrdering {
  IdAsc = "id_asc",
  IdDesc = "id_desc",
  CodeAsc = "code_asc",
  CodeDesc = "code_desc",
  NameAsc = "name_asc",
  NameDesc = "name_desc",
  _IdAsc = "_id_asc",
  _IdDesc = "_id_desc"
}

export enum _ChildThemeOrdering {
  IdAsc = "id_asc",
  IdDesc = "id_desc",
  CodeAsc = "code_asc",
  CodeDesc = "code_desc",
  NameAsc = "name_asc",
  NameDesc = "name_desc",
  _IdAsc = "_id_asc",
  _IdDesc = "_id_desc"
}

export enum _ArtistOrdering {
  IdAsc = "id_asc",
  IdDesc = "id_desc",
  CodeAsc = "code_asc",
  CodeDesc = "code_desc",
  NameAsc = "name_asc",
  NameDesc = "name_desc",
  _IdAsc = "_id_asc",
  _IdDesc = "_id_desc"
}

export enum _PlaceOrdering {
  IdAsc = "id_asc",
  IdDesc = "id_desc",
  CodeAsc = "code_asc",
  CodeDesc = "code_desc",
  NameAsc = "name_asc",
  NameDesc = "name_desc",
  _IdAsc = "_id_asc",
  _IdDesc = "_id_desc"
}

export enum _ProductOrdering {
  IdAsc = "id_asc",
  IdDesc = "id_desc",
  CodeAsc = "code_asc",
  CodeDesc = "code_desc",
  TypeAsc = "type_asc",
  TypeDesc = "type_desc",
  NameAsc = "name_asc",
  NameDesc = "name_desc",
  _IdAsc = "_id_asc",
  _IdDesc = "_id_desc"
}

export enum _RelationDirections {
  In = "IN",
  Out = "OUT"
}

// ====================================================
// Documents
// ====================================================

export namespace Hello {
  export type Variables = {};

  export type Query = {
    __typename?: "Query";

    hello: string;
  };
}

export namespace Product {
  export type Variables = {};

  export type Query = {
    __typename?: "Query";

    Product: Maybe<(Maybe<Product>)[]>;
  };

  export type Product = {
    __typename?: "Product";

    id: string;

    name: string;

    code: string;

    type: string;

    relatedTo: Maybe<(Maybe<RelatedTo>)[]>;

    partOf: Maybe<PartOf>;
  };

  export type RelatedTo = {
    __typename?: "_ProductRelatedTo";

    ChildTheme: Maybe<ChildTheme>;
  };

  export type ChildTheme = {
    __typename?: "ChildTheme";

    id: string;

    name: string;

    code: string;

    parent: Maybe<Parent>;
  };

  export type Parent = {
    __typename?: "_ChildThemeParent";

    Theme: Maybe<Theme>;
  };

  export type Theme = {
    __typename?: "Theme";

    id: string;

    name: string;

    code: string;
  };

  export type PartOf = {
    __typename?: "_ProductPartOfDirections";

    to: Maybe<(Maybe<To>)[]>;
  };

  export type To = {
    __typename?: "_ProductPartOf";

    Product: Maybe<_Product>;
  };

  export type _Product = {
    __typename?: "Product";

    id: string;

    name: string;

    code: string;

    type: string;

    relatedTo: Maybe<(Maybe<_RelatedTo>)[]>;
  };

  export type _RelatedTo = {
    __typename?: "_ProductRelatedTo";

    ChildTheme: Maybe<_ChildTheme>;
  };

  export type _ChildTheme = {
    __typename?: "ChildTheme";

    id: string;

    name: string;

    code: string;

    parent: Maybe<_Parent>;
  };

  export type _Parent = {
    __typename?: "_ChildThemeParent";

    Theme: Maybe<_Theme>;
  };

  export type _Theme = {
    __typename?: "Theme";

    id: string;

    name: string;

    code: string;
  };
}

export namespace CreateProduct {
  export type Variables = {
    id: string;
    code: string;
    name: string;
    type: string;
  };

  export type Mutation = {
    __typename?: "Mutation";

    CreateProduct: Maybe<CreateProduct>;
  };

  export type CreateProduct = {
    __typename?: "Product";

    id: string;

    name: string;

    code: string;

    type: string;
  };
}

export namespace Theme {
  export type Variables = {};

  export type Query = {
    __typename?: "Query";

    Theme: Maybe<(Maybe<Theme>)[]>;
  };

  export type Theme = {
    __typename?: "Theme";

    id: string;

    code: string;

    name: string;

    childs: Maybe<(Maybe<Childs>)[]>;
  };

  export type Childs = {
    __typename?: "_ThemeChilds";

    ChildTheme: Maybe<ChildTheme>;
  };

  export type ChildTheme = {
    __typename?: "ChildTheme";

    id: string;

    code: string;

    name: string;
  };
}

// ====================================================
// START: Apollo Angular template
// ====================================================

import { Injectable } from "@angular/core";
import * as Apollo from "apollo-angular";

import gql from "graphql-tag";

// ====================================================
// Apollo Services
// ====================================================

@Injectable({
  providedIn: "root"
})
export class HelloGQL extends Apollo.Query<Hello.Query, Hello.Variables> {
  document: any = gql`
    query Hello {
      hello
    }
  `;
}
@Injectable({
  providedIn: "root"
})
export class ProductGQL extends Apollo.Query<Product.Query, Product.Variables> {
  document: any = gql`
    query Product {
      Product {
        id
        name
        code
        type
        relatedTo {
          ChildTheme {
            id
            name
            code
            parent {
              Theme {
                id
                name
                code
              }
            }
          }
        }
        partOf {
          to {
            Product {
              id
              name
              code
              type
              relatedTo {
                ChildTheme {
                  id
                  name
                  code
                  parent {
                    Theme {
                      id
                      name
                      code
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;
}
@Injectable({
  providedIn: "root"
})
export class CreateProductGQL extends Apollo.Mutation<
  CreateProduct.Mutation,
  CreateProduct.Variables
> {
  document: any = gql`
    mutation CreateProduct(
      $id: ID!
      $code: String!
      $name: String!
      $type: String!
    ) {
      CreateProduct(id: $id, code: $code, name: $name, type: $type) {
        id
        name
        code
        type
      }
    }
  `;
}
@Injectable({
  providedIn: "root"
})
export class ThemeGQL extends Apollo.Query<Theme.Query, Theme.Variables> {
  document: any = gql`
    query Theme {
      Theme {
        id
        code
        name
        childs {
          ChildTheme {
            id
            code
            name
          }
        }
      }
    }
  `;
}

// ====================================================
// END: Apollo Angular template
// ====================================================
