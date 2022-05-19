import { Injectable } from '@angular/core';
import { sample_items } from 'src/data';
import { Items } from '../ToAll/Models/Items';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() { }
  getAll():Items[]{
    return sample_items;
  }
  getAllItemsBySearchTerm(searchTerm:string){
    return this.getAll().filter(item=>item.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
  getItemById(itemId:string):Items{
    return this.getAll().find(item => item.id == itemId) ?? new Items();
  }
}
