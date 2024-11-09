import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { InvoiceComponent } from './invoice/invoice.component';
import { ReservationComponent } from './reservation/reservation.component';


export const routes: Routes = [

  {path:'',component:ReservationComponent}


];
