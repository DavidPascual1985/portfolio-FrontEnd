import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-login-header',
  templateUrl: './login-header.component.html',
  styleUrls: ['./login-header.component.css']
})
export class LoginHeaderComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      usuario: ['', [Validators.required]],
      contraseña: ['', [Validators.required, Validators.minLength(8)]]
    })
  }
  ngOnInit() { }

  get Contraseña() {
    return this.form.get("contraseña");
  }

  get Usuario() {
    return this.form.get("usuario");
  }

  get UsuarioValido() {
    return this.Usuario?.touched && !this.Usuario?.valid;
  }

  get ContraseñaValida() {
    return this.Contraseña?.touched && !this.Contraseña?.valid;
  }


  onEnviar(event: Event) {
    event.preventDefault;

    if (this.form.valid) {
    } else {
      this.form.markAllAsTouched();
    }

  }
}
