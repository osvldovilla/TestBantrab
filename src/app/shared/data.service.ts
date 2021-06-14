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
      dpi: "2848969930114",
      direccion: "19 Calle, Zona 1"
    },
    {
      id: 456,
      descripcion: "Solicitar documentación al cliente",
      cliente: "Paola Perez",
      dpi: "3125123451503",
      direccion: "Baja Verapaz, Zona 4"
    },
    {
      id: 894,
      descripcion: "Solicitar documentación al cliente",
      cliente: "Karen Mendoza",
      dpi: "2945123451503",
      direccion: "Mixco Guatemala, Zona 4"
    },
    {
      id: 26,
      descripcion: "Solicitar documentación al cliente",
      cliente: "Salvador Reyes",
      dpi: "3912123451503",
      direccion: "Mixco, el naranjo"
    },
    {
      id: 144,
      descripcion: "Solicitar documentación al cliente",
      cliente: "Antonio Leal",
      dpi: "1895123451503",
      direccion: "Solola"
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