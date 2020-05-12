import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DenunciaAddComponent } from './denuncia-add/denuncia-add.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpleadosComponent } from './empleados/empleados.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'Denuncia-add', component: DenunciaAddComponent },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'empleados', component: EmpleadosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
