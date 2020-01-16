import { Component } from '@angular/core';

export interface Tile {
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fractaly';

  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 1},
    {text: 'Two', cols: 1, rows: 1},
    {text: 'Three', cols: 1, rows: 1},
    {text: 'Four', cols: 1, rows: 1},
    {text: 'Five', cols: 1, rows: 1},
    {text: 'Six', cols: 1, rows: 1},
    {text: 'Seven', cols: 1, rows: 1},
    {text: 'Eight', cols: 1, rows: 1},
    {text: 'Nine', cols: 1, rows: 1},
  ];
}
