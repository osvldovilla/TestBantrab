import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {
  public users = [
    {
      name: "Josué",
      city: "Guatemala"
    },

    {
      name: "Antonio",
      city: "Amatitlan"
    },

    {
      name: "Paola",
      city: ""
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }
}
