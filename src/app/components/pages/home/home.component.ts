import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from 'src/app/services/items.service';
import { Items } from 'src/app/ToAll/Models/Items';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items:Items[] = [];

  constructor(private itemService:ItemsService, activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm)
      this.items=this.itemService.getAllItemsBySearchTerm(params.searchTerm);
      else
      this.items=itemService.getAll();

    })
  }

  ngOnInit(): void {
  }

}
