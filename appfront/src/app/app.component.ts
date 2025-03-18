import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormularioUsuarioComponent } from './formulario-usuario/formulario-usuario.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormularioUsuarioComponent,LoginComponent,RouterModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'appfront';
}
