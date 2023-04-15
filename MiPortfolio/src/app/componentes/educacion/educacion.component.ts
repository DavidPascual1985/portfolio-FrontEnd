import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})

export class EducacionComponent {
  educacionLista: any=[];

  constructor (private datos:PortfolioService) { }

  ngOnInit():void {
    this.datos.obtenerDatos().subscribe(dato=> {
      this.educacionLista = dato.educacion;
    
    })
  }
}
