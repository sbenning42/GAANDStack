export type Maybe<T> = T | null;

export interface _TodoFilter {
  AND?: Maybe<(Maybe<_TodoFilter>)[]>;

  OR?: Maybe<(Maybe<_TodoFilter>)[]>;

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

  done?: Maybe<boolean>;

  done_not?: Maybe<boolean>;
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

export interface _TodoInput {
  id: string;
}

export enum _TodoOrdering {
  IdAsc = "id_asc",
  IdDesc = "id_desc",
  NameAsc = "name_asc",
  NameDesc = "name_desc",
  DoneAsc = "done_asc",
  DoneDesc = "done_desc",
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

export namespace Todo {
  export type Variables = {
    id?: Maybe<string>;
    name?: Maybe<string>;
    done?: Maybe<boolean>;
    _id?: Maybe<string>;
    first?: Maybe<number>;
    offset?: Maybe<number>;
    orderBy?: Maybe<(Maybe<_TodoOrdering>)[]>;
    filter?: Maybe<_TodoFilter>;
  };

  export type Query = {
    __typename?: "Query";

    Todo: Maybe<(Maybe<Todo>)[]>;
  };

  export type Todo = {
    __typename?: "Todo";

    id: string;

    name: string;

    done: boolean;
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
export class TodoGQL extends Apollo.Query<Todo.Query, Todo.Variables> {
  document: any = gql`
    query Todo(
      $id: ID
      $name: String
      $done: Boolean
      $_id: String
      $first: Int
      $offset: Int
      $orderBy: [_TodoOrdering]
      $filter: _TodoFilter
    ) {
      Todo(
        id: $id
        name: $name
        done: $done
        _id: $_id
        first: $first
        offset: $offset
        orderBy: $orderBy
        filter: $filter
      ) {
        id
        name
        done
      }
    }
  `;
}

// ====================================================
// END: Apollo Angular template
// ====================================================
