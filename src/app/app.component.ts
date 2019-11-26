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

  courses;

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

  onAdd(){
    this.courses.push({id:4, name:"course4"})
  }

  onRemove(course){
    let index = this.courses.indexOf(course);
    this.courses.splice(index,1)
  }

  onChange(course){
    course.name = "UPDATED";
  }

  onFavoriteChanged(eventArgs: FavoriteEventArgs){
    console.log("favorite changed: "+ eventArgs.newValue)
  }

  loadCourses(){
    this.courses = [
      {id:1, name:'course1'},
      {id:2, name:'course2'},
      {id:3, name:'course3'},
    ];
  }

  trackCourse(index, course){
    return course ? course.id : undefined;
  }


}
