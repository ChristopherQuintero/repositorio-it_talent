import { Component, OnInit } from '@angular/core';
import { Endpoint1Service } from '../../services/endpoint1.service';
import { Endpoint2Service } from '../../services/endpoint2.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private endpoint1Service: Endpoint1Service,
    private endpoint2Service: Endpoint2Service
  ) { }

  ngOnInit() {
    this.endpoint1Service.getData1().subscribe( data => {
      console.log('____Data Api: ');
      console.log(data);
    });
    this.endpoint2Service.getData2().subscribe( data2 => {
      console.log('____Data Api2: ');
      console.log(data2);
    });
  }

}
