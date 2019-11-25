import { Component, OnInit, Input } from '@angular/core';
import { faCoffee, fas } from '@fortawesome/free-solid-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
  // input:['isfavorite'] redundant with Input import and have refactoring issues.
})
export class FavoritesComponent implements OnInit {
  fasStar = fasStar;
  farStar = farStar;
  @Input() isFavorite;



  constructor() { }

  ngOnInit() {
  }

  handleFavoriteClick(){
    this.isFavorite =!this.isFavorite;
    console.log(this.isFavorite)
  }

}
