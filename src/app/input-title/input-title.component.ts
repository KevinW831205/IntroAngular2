import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-title',
  templateUrl: './input-title.component.html',
  styleUrls: ['./input-title.component.css']
})
export class InputTitleComponent implements OnInit {
  titleInput = "test"


  constructor() { }

  ngOnInit() {
  }

}
