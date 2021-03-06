import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OffersPage } from './offers.page';

const routes: Routes = [
  {
    path: '',
    component: OffersPage
  },
  {
    path: 'create',
    loadChildren: () => import('./offer-form/offer-form.module').then(m => m.OfferFormPageModule)
  },
  {
    path: ':offerId/edit',
    loadChildren: () => import('./offer-form/offer-form.module').then(m => m.OfferFormPageModule),
  },
  {
    path: ':offerId/bookings',
    loadChildren: () => import('./offer-bookings/offer-bookings.module').then(m => m.OfferBookingsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffersPageRoutingModule { }
