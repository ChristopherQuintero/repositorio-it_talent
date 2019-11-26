import { Component, OnInit } from '@angular/core';
import { Endpoint2Service } from '../../services/endpoint2.service';
import { Endpoint2 } from '../../interfaces/endpoint2';

@Component({
  selector: 'app-pregunta2',
  templateUrl: './pregunta2.component.html',
  styleUrls: ['./pregunta2.component.css']
})
export class Pregunta2Component implements OnInit {
  validador: boolean;
  list: Endpoint2[];

  constructor(
    private endpoint2: Endpoint2Service
  ) { }

  ngOnInit() {
    this.endpoint2.getData2().subscribe(
      data => {
        console.log('____Data Api2: ');
        console.log(data);
        this.list = data;
        // this.validador = data.success;
        console.log('__Datos List2: ');
        console.log(this.list);
      }
    );
  }

}
