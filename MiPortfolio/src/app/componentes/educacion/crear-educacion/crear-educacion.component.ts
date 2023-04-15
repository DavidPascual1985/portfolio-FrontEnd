import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-crear-educacion',
  templateUrl: './crear-educacion.component.html',
  styleUrls: ['./crear-educacion.component.css']
})
export class CrearEducacionComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      titulo: ['', [Validators.required]],
      institucion: ['', [Validators.required]],
      desde: ['', [Validators.required]],
      hasta: ['', [Validators.required]],
    })
  }
  ngOnInit() { }

  get Titulo() {
    return this.form.get("titulo");
  }

  get Institucion() {
    return this.form.get("institucion");
  }

  get Desde() {
    return this.form.get("desde");
  }

  get Hasta() {
    return this.form.get("hasta");
  }

  get TituloInvalido() {
    return this.Titulo?.touched && !this.Titulo?.valid;
  }

  get InstitucionInvalida() {
    return this.Institucion?.touched && !this.Institucion?.valid;
  }

  get DesdeInvalido() {
    return this.Desde?.touched && !this.Desde?.valid;
  }

  get HastaInvalido() {
    return this.Hasta?.touched && !this.Hasta?.valid;
  }


  onEnviar(event: Event) {

    event.preventDefault;

    if (this.form.valid) {
    } else {
      this.form.markAllAsTouched();
    }
  }
}
