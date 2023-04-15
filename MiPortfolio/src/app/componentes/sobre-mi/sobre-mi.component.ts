import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})

export class SobreMiComponent implements OnInit {
  nombreSobreMi: string = '';
  textoSobreMi: string = '';
  imagenBaner: string = '';
  imagenPerfil: string = '';

  constructor(private datos:PortfolioService) { }

  ngOnInit():void {
    this.datos.obtenerDatos().subscribe(dato => {
      this.nombreSobreMi = dato.nombre;
      this.textoSobreMi = dato.sobreMi;
      this.imagenBaner = dato.imagenBaner;
      this.imagenPerfil = dato.imagenPerfil;

    })

  }
  
}
