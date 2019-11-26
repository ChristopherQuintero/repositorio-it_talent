import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Endpoint2 } from '../interfaces/endpoint2';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Endpoint2Service {

  apiURL = 'http://168.232.165.184/prueba/dict';

  constructor(
    private httpClient: HttpClient
  ) { }

  getData2(): Observable<Endpoint2[]> {
    return this.httpClient.get<Endpoint2[]>(this.apiURL);
  }
}
