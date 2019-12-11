import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-archive-page',
  templateUrl: './archive-page.component.html',
  styleUrls: ['./archive-page.component.css']
})
export class ArchivePageComponent implements OnInit {

  year:number;
  month:number;

  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    let params = this.route.snapshot.paramMap;
    this.year = +params.get('year');
    this.month = +params.get('month');
  }

  viewAll(){
    this.router.navigate(['/'])
  }

}
