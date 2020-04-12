import { Component, Host } from "@angular/core";
import { Product } from './product';
import { hostViewClassName } from '@angular/compiler';

@Component({
    selector:'product-row',
    templateUrl:'product-row.component.html',
    styleUrls:['product-row.component.css'],
    inputs:['product'],
    host:{class :'row'}
})
export class ProductRowComponent{
    product:Product;

    constructor(){

    }

    
}