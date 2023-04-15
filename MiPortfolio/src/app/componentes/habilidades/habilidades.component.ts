import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})

export class HabilidadesComponent implements OnInit {

  habilidadesLista: any = ['string', ''];

  constructor(private datos: PortfolioService) { }
  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(dato => {
      this.habilidadesLista = dato.habilidades;

    })

  }
}
