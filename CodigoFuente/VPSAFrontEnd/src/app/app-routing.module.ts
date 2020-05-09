import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Iportar ahora los componentes
import {DenunciaAddComponent} from './denuncia-add/denuncia-add.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {EmpleadosComponent} from './empleados/empleados.component';

const routes: Routes = [
{path:'Denuncia-add' ,component : DenunciaAddComponent},
{path:'denuncia-add' ,component : DenunciaAddComponent},
{path:'Dashboard' ,component : DashboardComponent},
{path:'dashboard' ,component : DashboardComponent},
{path:'empleados' ,component : EmpleadosComponent},
{path:'' ,component : DashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


