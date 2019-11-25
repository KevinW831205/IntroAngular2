import { Component, OnInit } from '@angular/core';
import { faCoffee, fas } from '@fortawesome/free-solid-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  fasStar = fasStar;
  farStar = farStar;
  isFavorite = false;



  constructor() { }

  ngOnInit() {
  }

  handleFavoriteClick(){
    this.isFavorite =!this.isFavorite;
    console.log(this.isFavorite)
  }

}
