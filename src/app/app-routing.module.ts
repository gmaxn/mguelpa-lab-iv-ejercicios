import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './routes/bienvenido/bienvenido.component';
import { EjercicioIComponent } from './routes/ejercicio-i/ejercicio-i.component';
import { ErrorComponent } from './routes/error/error.component';
import { LoginComponent } from './routes/login/login.component';

const routes: Routes = [
  { path: 'bienvenido', component: BienvenidoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'ejercicio-i', component: EjercicioIComponent },

  { path: '', component: BienvenidoComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
