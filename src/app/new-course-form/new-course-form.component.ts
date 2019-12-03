import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent implements OnInit {

  get topics(){
    return this.form.get('topics') as FormArray
  }

  form = new FormGroup({
    topics: new FormArray([])

  })

  addTopic(topic: HTMLInputElement){
    (this.topics as FormArray).push(new FormControl(topic.value) );
    topic.value='';
  }

  removeTopic(topic: FormControl){
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  constructor() { }

  ngOnInit() {
  }

}
