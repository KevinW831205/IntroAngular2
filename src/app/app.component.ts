import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FavoriteEventArgs } from './favorites/favorites.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world-Angular-Intro';

  viewMode = 'map'

  courses = [1,2,3];

  post = {
    title: "Title",
    isFavorite: true
  }

  tweet ={
    body: '',
    likesCount :10,
    isLiked: true
  }

  haveCourses(){
    console.log( "course list", this.courses.length)
    if(this.courses.length >0){
      return true;
    }
    console.log("return false")
    return false;
  }

  onFavoriteChanged(eventArgs: FavoriteEventArgs){
    console.log("favorite changed: "+ eventArgs.newValue)
  }

}
