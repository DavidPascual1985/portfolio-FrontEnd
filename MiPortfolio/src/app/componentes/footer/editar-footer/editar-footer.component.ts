import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-footer',
  templateUrl: './editar-footer.component.html',
  styleUrls: ['./editar-footer.component.css']
})
export class EditarFooterComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      direccion: ['',[Validators.required]],
      telefono: ['',[Validators.required]],
      email: ['',[Validators.required,Validators.email]],
      titulo: ['',[Validators.required]],
      descripcion: ['',[Validators.required]]
    })
}

ngOnInit() { }

  get Direccion() {
    return this.form.get("direccion");
  }

  get Telefono() {
    return this.form.get("telefono");
  }

  get Email() {
    return this.form.get("email");
  }

  get Titulo() {
    return this.form.get("titulo");
  }

  get Descripcion() {
    return this.form.get("descripcion");
  }

  get DireccionInvalida() {
    return this.Direccion?.touched && !this.Direccion?.valid;
  }

  get TelefonoInvalido() {
    return this.Telefono?.touched && !this.Telefono?.valid;
  }

  get EmailInvalido() {
    return this.Email?.touched && !this.Email?.valid;
  }

  get TituloInvalido() {
    return this.Titulo?.touched && !this.Titulo?.valid;
  }

  get DescricionInvalida() {
    return this.Descripcion?.touched && !this.Descripcion?.valid;
  }


  onEnviar(event: Event) {

    event.preventDefault;

    if (this.form.valid) {
    } else {
      this.form.markAllAsTouched();
    }
  }
}

