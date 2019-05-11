export type Maybe<T> = T | null;

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

// ====================================================
// END: Apollo Angular template
// ====================================================
