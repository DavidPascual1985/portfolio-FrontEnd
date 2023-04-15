import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-habilidades',
  templateUrl: './editar-habilidades.component.html',
  styleUrls: ['./editar-habilidades.component.css']
})
export class EditarHabilidadesComponent  implements OnInit {
    form: FormGroup;
  
    constructor(private formBuilder: FormBuilder) {
      this.form = formBuilder.group({
        habilidad: ['', [Validators.required]],
        porcentaje: ['', [Validators.required]],
        color: ['', [Validators.required]]
      })
    }
  
    ngOnInit() { }
  
    get Habilidad() {
      return this.form.get("habilidad");
    }
  
    get Porcentaje() {
      return this.form.get("porcentaje");
    }
  
    get Color() {
      return this.form.get("color");
    }
  
    get HabilidadInvalida() {
      return this.Habilidad?.touched && !this.Habilidad?.valid;
    }
  
    get PorcentajeInvalido() {
      return this.Porcentaje?.touched && !this.Porcentaje?.valid;
    }
  
    get ColorInvalido() {
      return this.Color?.touched && !this.Color?.valid;
    }
  
    onEnviar(event: Event) {
  
      event.preventDefault;
  
      if (this.form.valid) {
      } else {
        this.form.markAllAsTouched();
      }
    }
  }
  