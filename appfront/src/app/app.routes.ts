import { Routes } from '@angular/router';
import { FormularioUsuarioComponent } from './formulario-usuario/formulario-usuario.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:"formulariousuarios",component:FormularioUsuarioComponent},
    {path:"",component:LoginComponent},

];
