import { Component, OnInit } from '@angular/core';
import { HelloGQL, Hello, TodoGQL, Todo } from './graphql';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  hello$: Observable<string>;
  todos$: Observable<Todo.Todo[]>;
  constructor(
    private helloGQL: HelloGQL,
    private todoGQL: TodoGQL,
  ) {}

  ngOnInit() {
    this.hello$ = this.helloGQL.watch().valueChanges.pipe(
      map(v => v.data && v.data.hello)
    );
    this.todos$ = this.todoGQL.watch({ first: 25 }).valueChanges.pipe(
      map(v => v.data && v.data.Todo)
    );
  }
}
