import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Componente01Component } from './componente01/componente01.component';
import { Componente02Component } from './componente02/componente02.component';
import { Componente09Component } from './componente09/componente09.component';
import { Component10Component } from './component10/component10.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet, Componente01Component, Componente02Component, Componente09Component, Component10Component]
})
export class AppComponent {
  title = 'angular-basico';
}
