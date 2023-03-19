import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {  title = 'crm';
user = 'harini';
d = Date.now();
cus={firstname:"Imman",city:"Chennai",citycode:"CHN",pincode:603210};
}

