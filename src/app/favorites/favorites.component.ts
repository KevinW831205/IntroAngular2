import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faCoffee, fas } from '@fortawesome/free-solid-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
  // input:['isfavorite'] redundant with Input import and have refactoring issues.
  // styles: [`
  //   .favorite{
  //     backgroudn-color: black;
  //   }
  
  // `]

})
export class FavoritesComponent implements OnInit {
  fasStar = fasStar;
  farStar = farStar;
  @Input('is-fav') isFavorite: boolean;
  @Output('change') change = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  handleFavoriteClick(){
    this.isFavorite =!this.isFavorite;
    this.change.emit({newValue: this.isFavorite});
    console.log(this.isFavorite)
  }

}

export interface FavoriteEventArgs{
  newValue: boolean
}