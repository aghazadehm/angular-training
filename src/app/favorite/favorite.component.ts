import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
  // tslint:disable-next-line:no-input-rename
  @Input('is-favorite') isSelected: boolean;
  // tslint:disable-next-line:no-output-native
  @Output('change') click = new EventEmitter();
  constructor() { }

  onClick() {
    this.isSelected = !this.isSelected;
    const args: FavoriteChangedEventArgs = {value: this.isSelected};
    this.click.emit(args);
  }
}

export interface FavoriteChangedEventArgs {
  value: boolean;
}
