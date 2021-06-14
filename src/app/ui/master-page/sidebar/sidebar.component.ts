import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public sideBarNav: any = [];

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.sideBarNav = this.dataService.getAllItemSideBar();    
  }

  toggle():void{
    let sidebar: Element | any = document.querySelector(".sidebar");

    sidebar.classList.toggle("active");
  }
}
