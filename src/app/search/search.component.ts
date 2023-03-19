import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
searchId:any;
searchQ:any;
searchAns:any;
constructor(private aR:ActivatedRoute){
  this.aR.queryParams.subscribe((Params)=>{
    console.log(Params);
    this.searchId = Params["id"];
    this.searchQ = Params["q"];
    this.searchAns = Params["ans"];
  })
}

}

