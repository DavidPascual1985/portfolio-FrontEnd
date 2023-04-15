import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-proyecto',
  templateUrl: './crear-proyecto.component.html',
  styleUrls: ['./crear-proyecto.component.css']
})

export class CrearProyectoComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      imagen: ['',[Validators.required]],
      nombre: ['',[Validators.required]],
      descripcion: ['',[Validators.required, Validators.maxLength(200)]],
      url: ['',[Validators.required]]

    })
  }
  ngOnInit() {}

  get Imagen() {
    return this.form.get("imagen");
  }

  get Nombre() {
    return this.form.get("nombre");
  }

  get Descripcion() {
    return this.form.get("descripcion");
  }

  get Url() {
    return this.form.get("url");
  }

  get ImagenInvalida() {
    return this.Imagen?.touched && !this.Imagen?.valid;
  }

  get NombreInvalido() {
    return this.Nombre?.touched && !this.Nombre?.valid;
  }

  get DescripcionInvalida() {
    return this.Descripcion?.touched && !this.Descripcion?.valid;
  }

  get UrlInvalida() {
    return this.Url?.touched && !this.Url?.valid;
  }

  onEnviar(event: Event) {
    event.preventDefault;

    if (this.form.valid) {
    } else {
      this.form.markAllAsTouched();
    }

  }
}
