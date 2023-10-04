import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      nombreCompleto: ['', Validators.required],
      edad: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      dni: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      curso: ['', Validators.required],
    });
  }

  onSubmit() {
    // Aquí puedes agregar la lógica para manejar el envío del formulario
    // Por ejemplo, imprimir los valores en la consola por ahora
    console.log('Formulario enviado:', this.formulario.value);
  }
}
