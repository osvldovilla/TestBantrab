import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetalleGestionComponent } from './ui/lista-gestiones/detalle-gestion/detalle-gestion.component';
import { GestionesComponent } from './ui/lista-gestiones/gestiones/gestiones.component';
import { ContentComponent } from './ui/master-page/content/content.component';
import { SidebarComponent } from './ui/master-page/sidebar/sidebar.component';
import { NotFoundComponent } from './ui/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContentComponent,
    GestionesComponent,
    DetalleGestionComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
