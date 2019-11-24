import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

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
