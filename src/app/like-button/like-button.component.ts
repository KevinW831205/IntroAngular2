import { Component, OnInit, Input } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.css']
})
export class LikeButtonComponent implements OnInit {

  fasHeart = faHeart;

  @Input('likesCount') likesCount : number;
  @Input('isLiked') isLiked : boolean;

  handleOnClick(){
    this.likesCount += (this.isLiked) ? -1 :1;
    this.isLiked = !this.isLiked
  }

  constructor() { }

  ngOnInit() {
  }

}
