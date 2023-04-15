import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-sobre-mi',
  templateUrl: './crear-sobre-mi.component.html',
  styleUrls: ['./crear-sobre-mi.component.css']
})

export class CrearSobreMiComponent implements OnInit {
  form: FormGroup;

  constructor (private formBuilder:FormBuilder) {
    this.form = this.formBuilder.group({
      imagenBaner: ['',[Validators.required]],
      imagenPerfil: ['',[Validators.required]],
      nombre: ['',[Validators.required]],
      sobreMi: ['',[Validators.required]]
    })
  }

  ngOnInit(): void {}

  get ImagenBaner() {
    return this.form.get("imagenBaner");
  }

  get ImagenPerfil() {
    return this.form.get("imagenPerfil");
  }

  get Nombre() {
    return this.form.get("nombre");
  }

  get SobreMi() {
    return this.form.get("sobreMi");
  }

  get ImagenBanerInvalida() {
    return this.ImagenBaner?.touched && !this.ImagenBaner?.valid;
  }

  get ImagenPerfilInvalida() {
    return this.ImagenPerfil?.touched && !this.ImagenPerfil?.valid;
  }

  get NombreInvalido() {
    return this.Nombre?.touched && !this.Nombre?.valid;
  }

  get SobreMiInvalido() {
    return this.SobreMi?.touched && !this.SobreMi?.valid;
  }

  onEnviar(event: Event) {
    event.preventDefault;

    if (this.form.valid) {
    } else {
      this.form.markAllAsTouched();
    }

  }
}
