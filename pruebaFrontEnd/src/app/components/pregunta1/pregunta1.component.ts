import { Component, OnInit } from '@angular/core';
import { Endpoint1Service } from 'src/app/services/endpoint1.service';
import { Endpoint1 } from '../../interfaces/endpoint1';

@Component({
  selector: 'app-pregunta1',
  templateUrl: './pregunta1.component.html',
  styleUrls: ['./pregunta1.component.css']
})
export class Pregunta1Component implements OnInit {
  validador: boolean;
  list: Endpoint1[];

  constructor(
    private endpoint1: Endpoint1Service
  ) { }

  ngOnInit() {
    this.endpoint1.getData1().subscribe(
      data => {
        console.log('____Data Api: ');
        console.log(data);
        this.list = data;
        // this.validador = data.success;
        console.log('__Datos List: ');
        console.log(this.list);
      }
    );
  }

}
