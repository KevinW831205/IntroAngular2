import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archive-nav',
  templateUrl: './archive-nav.component.html',
  styleUrls: ['./archive-nav.component.css']
})
export class ArchiveNavComponent implements OnInit {

  archives = [{ year: 2019, month: 1 }, { year: 2019, month: 1 }, { year: 2019, month: 1 }]

  constructor() {
    
   }

  ngOnInit() {
  }

}
