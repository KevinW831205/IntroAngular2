import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-zippy-component',
  templateUrl: './zippy-component.component.html',
  styleUrls: ['./zippy-component.component.css']
})
export class ZippyComponentComponent implements OnInit {


  @Input('title') title: String;
  isExpanded: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.isExpanded = !this.isExpanded
  }

}
