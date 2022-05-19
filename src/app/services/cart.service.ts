import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../ToAll/Models/Cart';
import { CartItem } from '../ToAll/Models/CartItem';
import { Items } from '../ToAll/Models/Items';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

  constructor() { }
   addTOCart(item:Items):void{
     let cartItem = this.cart.items.find(items => items.item.id === item.id);
     if(cartItem) return;

     this.cart.items.push(new CartItem(item));
     this.setCartToLocalStorage();

   }
   removeFromCart(itemId: string):void{
     this.cart.items = this.cart.items.filter(items => items.item.id != itemId)
     this.setCartToLocalStorage();

   }
   changeQuantity(itemId:string, quantity: number){
     let cartItem = this.cart.items
     .find(items =>items.item.id === itemId);
     if(!cartItem) return;

     cartItem.quantity = quantity;
     cartItem.price = quantity * cartItem.item.price;
     this.setCartToLocalStorage();

   }
   clearCart(){
     this.cart = new Cart();
     this.setCartToLocalStorage();
   }
   getCartObservable():Observable<Cart>{
     return this.cartSubject.asObservable();
   }

   private setCartToLocalStorage():void{
     this.cart.totalPrice = this.cart.items.reduce((prevSum, currentItem)=> prevSum+currentItem.price,0);
     this.cart.totalCount=this.cart.items.reduce((prevSum, currentItem)=> prevSum + currentItem.quantity,0);

     const cartJson = JSON.stringify(this.cart);
     localStorage.setItem('Cart',cartJson);
     this.cartSubject.next(this.cart);
   }
   private getCartFromLocalStorage():Cart{
     const cartJson = localStorage.getItem('Cart');
     return cartJson? JSON.parse(cartJson): new Cart();
   }
}
