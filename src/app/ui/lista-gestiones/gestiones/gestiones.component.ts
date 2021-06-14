import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-gestiones',
  templateUrl: './gestiones.component.html',
  styleUrls: ['./gestiones.component.css']
})
export class GestionesComponent implements OnInit {
  public gestiones: any = [];

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.gestiones = this.dataService.getAllGestiones();
  }
}
