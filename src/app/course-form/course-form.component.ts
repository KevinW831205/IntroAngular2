import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  categoryList = [
    {id:1, name:"tech"},
    {id:2, name:"application"},
    {id:3, name:"other"}
  ]

  log(x){
    console.log(x)
  }



  constructor() { }

  ngOnInit() {
  }

}
