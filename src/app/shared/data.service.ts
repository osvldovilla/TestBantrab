import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  public gestiones = [
    {
      id: 123,
      descripcion: "Visitar al cliente el dia de mañana",
      cliente: "Josué Osvaldo",
      direccion: "19 Calle, Zona 1"
    },
    {
      id: 456,
      descripcion: "Solicitar documentación al cliente",
      cliente: "Paola Perez",
      direccion: "Baja Verapaz, Zona 4"
    }
  ];

  public sideBarNav = [
    {
      name: "Categoria 1",
      icon: "bx bx-folder",
      redirect: "../gestiones"
    },
    {
      name: "Categoria 2",
      icon: "bx bx-heart",
      redirect: "../gestiones"
    },
    {
      name: "Categoria 3",
      icon: "bx bx-chat",
      redirect: "../gestiones"
    },
    {
      name: "Categoria 4",
      icon: "bx bx-cog",
      redirect: "../gestiones"
    }
  ];

  getAllItemSideBar(){
    return this.sideBarNav;
  }
  
  getAllGestiones(){
    return this.gestiones;
  }

  getGestionesById(id: string | number | null){
    return this.gestiones.filter((gestion) => gestion.id == id);
  }

  constructor() { }
}