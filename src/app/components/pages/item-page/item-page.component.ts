import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ItemsService } from 'src/app/services/items.service';
import { Items } from 'src/app/ToAll/Models/Items';



@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {
  item!:Items;

  constructor(activatedRoute:ActivatedRoute, itemService:ItemsService,
    private cartService:CartService, private router: Router) {
    activatedRoute.params.subscribe((params)=> {
      if(params.id)
      this.item = itemService.getItemById(params.id);
    })
   }

  ngOnInit(): void {
  }
  addToCart(){
    this.cartService.addTOCart(this.item);
    this.router.navigateByUrl('/cart-page');
  }

}
