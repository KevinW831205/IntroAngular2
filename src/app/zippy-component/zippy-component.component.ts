import { Component, OnInit, Input } from '@angular/core';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-zippy-component',
  templateUrl: './zippy-component.component.html',
  styleUrls: ['./zippy-component.component.css']
})
export class ZippyComponentComponent implements OnInit {

  faChevronUp = faChevronUp;
  faChevronDown = faChevronDown;

  @Input('title') title: String;
  isExpanded: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggle(){
    this.isExpanded = !this.isExpanded
  }

}
