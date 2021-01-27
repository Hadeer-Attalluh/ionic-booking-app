import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfferFormPageRoutingModule } from './offer-form-routing.module';

import { OfferFormPage } from './offer-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfferFormPageRoutingModule
  ],
  declarations: [OfferFormPage]
})
export class OfferFormPageModule {}
