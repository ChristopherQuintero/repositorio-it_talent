import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Endpoint1 } from '../interfaces/endpoint1';

@Injectable({
  providedIn: 'root'
})
export class Endpoint1Service {

  apiURL = 'http://168.232.165.184/prueba/array';

  constructor(
    private httpClient: HttpClient
  ) { }

  getData1(): Observable<Endpoint1[]> {
    return this.httpClient.get<Endpoint1[]>(this.apiURL);
  }
}
