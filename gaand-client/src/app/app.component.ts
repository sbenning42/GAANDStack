import { Component, OnInit } from '@angular/core';
import { HelloGQL, Hello } from './graphql';
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
  constructor(private helloGql: HelloGQL) {}

  ngOnInit() {
    this.hello$ = this.helloGql.watch().valueChanges.pipe(
      map(v => v.data && v.data.hello)
    );
  }
}
