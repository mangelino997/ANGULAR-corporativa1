import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SeleccionPersonalComponent } from './components/seleccion-personal/seleccion-personal.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'seleccionpersonal', component: SeleccionPersonalComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
