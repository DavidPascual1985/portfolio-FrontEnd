import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {
  footerDireccion: string = '';
  footerTelefono = '';
  footerURLWhatsapp: string = '';
  footerEmail: string = '';
  footerURLEmail: string ='';
  footerTitulo: string = '';
  footerDescripcion: string = '';


  constructor(private datos: PortfolioService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(dato => {
      this.footerDireccion = dato.direccion;
      this.footerTelefono = dato.telefono;
      this.footerEmail = dato.email;
      this.footerTitulo = dato.titulo;
      this.footerDescripcion = dato.descripcion;
      this.footerURLWhatsapp = dato.urlWhatsApp;
      this.footerURLEmail = dato.urlEmail;
    })
  }
}
