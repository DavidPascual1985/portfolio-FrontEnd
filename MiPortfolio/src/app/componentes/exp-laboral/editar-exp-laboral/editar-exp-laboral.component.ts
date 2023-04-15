import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-exp-laboral',
  templateUrl: './editar-exp-laboral.component.html',
  styleUrls: ['./editar-exp-laboral.component.css']
})
export class EditarExpLaboralComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      empresa: ['',[Validators.required]],
      cargo: ['',[Validators.required]],
      tareas: ['',[Validators.required,Validators.maxLength(300)]],
      desde: ['',[Validators.required]],
      hasta: ['',[Validators.required]]
    })
}

ngOnInit() { }

  get Empresa() {
    return this.form.get("empresa");
  }

  get Cargo() {
    return this.form.get("cargo");
  }

  get Tareas() {
    return this.form.get("tareas");
  }

  get Desde() {
    return this.form.get("desde");
  }

  get Hasta() {
    return this.form.get("hasta");
  }

  get EmpresaInvalido() {
    return this.Empresa?.touched && !this.Empresa?.valid;
  }

  get CargoInvalida() {
    return this.Cargo?.touched && !this.Cargo?.valid;
  }

  get TareasInvalida() {
    return this.Tareas?.touched && !this.Tareas?.valid;
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
