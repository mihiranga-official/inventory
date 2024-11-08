import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.scss'
})
export class InvoiceComponent {

    //Label Dats
     TotalDiscount:string='Total Discount Amount Changed'

     //#region Table Data
  
   number:string='WKT038M02'
   description:string='OFFice table with 02 drawers'
   qty:number=1
   price:number=24875.00;
   discountTable:number=19.02
   amount:number=100721.13

   balanceDue:number=170325.00

//#endregion


// Values Sections Data
total:number=210325.00
discount:number=-40000.00
payment  : number=0.00
balance:number=170325.00
prepayment:number=0.00
finalTotal:number=0.00

//Bottom Data

sales:string='Sales'
staff:string="Janith"
mgr:string='Yes'
recipt:string='000000001'


//#region Functions

sum() : void {

  let number_1 : number  = 10;
  let number_2 : number  = 20;
  let sum : number = Number(number_1) + Number(number_2);

  alert('Sum is : '+ sum);
}


//#endregion







}


