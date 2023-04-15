import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-exp-laboral',
  templateUrl: './exp-laboral.component.html',
  styleUrls: ['./exp-laboral.component.css']
})


export class ExpLaboralComponent implements OnInit {

experienciaLista: any= [];


  constructor(private datos:PortfolioService) { }

  ngOnInit():void {
    this.datos.obtenerDatos().subscribe(dato => {
      this.experienciaLista = dato.experiencias;
      

})
  }
}
