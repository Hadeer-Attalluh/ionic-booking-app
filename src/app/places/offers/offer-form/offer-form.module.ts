import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfferFormPageRoutingModule } from './offer-form-routing.module';

import { OfferFormPage } from './offer-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    OfferFormPageRoutingModule
  ],
  declarations: [OfferFormPage]
})
export class OfferFormPageModule { }
