import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleGestionComponent } from './ui/lista-gestiones/detalle-gestion/detalle-gestion.component';
import { GestionesComponent } from './ui/lista-gestiones/gestiones/gestiones.component';
import { SidebarComponent } from './ui/master-page/sidebar/sidebar.component';
import { NotFoundComponent } from './ui/not-found/not-found.component';

const routes: Routes = [
  { path: "", component: SidebarComponent },
  { path: "gestiones", component: GestionesComponent },
  { path: "detalleGestion/:id", component: DetalleGestionComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
