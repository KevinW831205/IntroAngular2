import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  course = {
    title: "A title",
    rating: 4.9745,
    students: 30000,
    price: 100.529,
    releaseDate: new Date(2016,3,1)
  }

  text = "asdfkljflasdslkjfljfkalsdjkla asdfkljflasdslkjfljfkalsdjkla asdfkljflasdslkjfljfkalsdjkla asdfkljflasdslkjfljfkalsdjkla asdfkljflasdslkjfljfkalsdjkl asdfkljflasdslkjfljfkalsdjkla asdfkljflasdslkjfljfkalsdjkla asdfkljflasdslkjfljfkalsdjkla"

  isActive = true;

  input1 = "00";

  constructor() { }

  ngOnInit() {
  }

  onSave($event) {
    $event.stopPropagation();
    console.log("button clicked")
    console.log($event);
  }

  onDivClick() {
    console.log("div clicked")
  }

  onKeyUp() {
    console.log(this.input1);
  }

}
