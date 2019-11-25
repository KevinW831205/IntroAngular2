import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world-Angular-Intro';

  post = {
    title: "Title",
    isFavorite: true
  }

  onFavoriteChanged(){
    console.log("favorite changed")
  }

}
