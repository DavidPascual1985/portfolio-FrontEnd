import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private aliasUno:HttpClient) { }

  obtenerDatos():Observable<any>{

    return this.aliasUno.get('./assets/json/database.json');
  }

}
