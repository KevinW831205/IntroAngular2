import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {


  constructor(private route: ActivatedRoute) {

   }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('userid');
    console.log(id)

    // this.route.paramMap
    //   .subscribe(params => {
    //     let id = params.get('userid');
    //     console.log(id)
    //     //service .get(id);
    //   })

  }

}