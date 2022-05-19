import { Items } from "./Items";

export class CartItem{
  constructor(public item:Items){}
  quantity:number=1;
  price: number=this.item.price;
}
