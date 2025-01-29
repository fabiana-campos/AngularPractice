import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-projeto',
  imports: [ReactiveFormsModule],
  templateUrl: './projeto.component.html',
  styleUrl: './projeto.component.css'
})
export class ProjetoComponent {

// Objeto de formulário

formulario = new FormGroup({
  nome : new FormControl('', [Validators.required, Validators.minLength(3)]),
  idade : new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)]),
  cidade : new FormControl('', [Validators.required, Validators.minLength(3)])
});

}
