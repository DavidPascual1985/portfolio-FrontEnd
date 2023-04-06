import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LoginHeaderComponent } from './componentes/header/login-header/login-header.component';

import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { CrearSobreMiComponent } from './componentes/sobre-mi/crear-sobre-mi/crear-sobre-mi.component';

import { EducacionComponent } from './componentes/educacion/educacion.component';
import { CrearEducacionComponent } from './componentes/educacion/crear-educacion/crear-educacion.component';
import { EditarEducacionComponent } from './componentes/educacion/editar-educacion/editar-educacion.component';

import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { CrearProyectoComponent } from './componentes/proyectos/crear-proyecto/crear-proyecto.component';
import { EditarProyectoComponent } from './componentes/proyectos/editar-proyecto/editar-proyecto.component';

import { ExpLaboralComponent } from './componentes/exp-laboral/exp-laboral.component';
import { CrearExpLaboralComponent } from './componentes/exp-laboral/crear-exp-laboral/crear-exp-laboral.component';
import { EditarExpLaboralComponent } from './componentes/exp-laboral/editar-exp-laboral/editar-exp-laboral.component';

import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { CrearHabilidadesComponent } from './componentes/habilidades/crear-habilidades/crear-habilidades.component';
import { EditarHabilidadesComponent } from './componentes/habilidades/editar-habilidades/editar-habilidades.component';

import { NavbarComponent } from './componentes/navbar/navbar.component';

import { FooterComponent } from './componentes/footer/footer.component';
import { EditarFooterComponent } from './componentes/footer/editar-footer/editar-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    EducacionComponent,
    ProyectosComponent,
    CrearProyectoComponent,
    EditarProyectoComponent,
    CrearEducacionComponent,
    EditarEducacionComponent,
    SobreMiComponent,
    CrearSobreMiComponent,
    HeaderComponent,
    LoginHeaderComponent,
    ExpLaboralComponent,
    CrearExpLaboralComponent,
    EditarExpLaboralComponent,
    HabilidadesComponent,
    CrearHabilidadesComponent,
    EditarHabilidadesComponent,
    NavbarComponent,
    FooterComponent,
    EditarFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
