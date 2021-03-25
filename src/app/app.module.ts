import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './components/shared/top-nav/top-nav.component';
import { EjercicioIComponent } from './routes/ejercicio-i/ejercicio-i.component';
import { AgeCalcComponent } from './components/ejercicio-i/age-calc/age-calc.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BienvenidoComponent } from './routes/bienvenido/bienvenido.component';
import { LoginComponent } from './routes/login/login.component';
import { ErrorComponent } from './routes/error/error.component';
import { SideNavComponent } from './components/shared/side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    EjercicioIComponent,
    AgeCalcComponent,
    BienvenidoComponent,
    LoginComponent,
    ErrorComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
