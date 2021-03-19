import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjercicioIComponent } from './routes/ejercicio-i/ejercicio-i.component';

const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  // { path: 'signin', component: SigninComponent },
  // { path: 'denied', component: DeniedComponent },
  
  { path: '', component: EjercicioIComponent },

  // { path: '', component: HomeComponent },
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
