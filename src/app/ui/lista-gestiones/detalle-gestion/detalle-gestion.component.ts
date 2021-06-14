import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalle-gestion',
  templateUrl: './detalle-gestion.component.html',
  styleUrls: ['./detalle-gestion.component.css']
})

export class DetalleGestionComponent implements OnInit {

  public gestion: any = {};

  constructor(private route:ActivatedRoute, 
              private dataService:DataService,
              private location:Location) { }

  ngOnInit(): void {
    const gestionId = this.route.snapshot.paramMap.get("id");
    this.gestion = this.gestion = this.dataService.getGestionesById(gestionId);
  }

  onBackPressed(): void{
    this.location.back() ;
  }
}