import { Component, OnInit } from '@angular/core';
import { ThemeGQL, Theme } from '../graphql';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent implements OnInit {

  themes$: Observable<Theme.Theme[]>;

  constructor(
    private theme: ThemeGQL
  ) { }

  ngOnInit() {
    this.themes$ = this.theme.watch().valueChanges.pipe(
      map(value => value.data && value.data.Theme)
    );
  }

}
