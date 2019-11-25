import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testground',
  templateUrl: './testground.component.html',
  styleUrls: ['./testground.component.css']
})
export class TestgroundComponent implements OnInit {

  listInput = "";
  list = [];



  constructor() { }

  ngOnInit() {
  }

  enterList(){
    if(this.listInput){
      let listItem = {
        item: this.listInput,
        date: new Date()
      }

      this.list.unshift(listItem);
      console.log(this.list);


      this.listInput = "";
    }
  }  

}
