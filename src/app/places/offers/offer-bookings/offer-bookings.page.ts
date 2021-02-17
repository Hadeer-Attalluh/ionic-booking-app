import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PlacesService } from '../../places.service';
import { Place } from '../../_models/place';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {
  offer: Place;
  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private placesService: PlacesService
  ) { }

  ngOnInit() {
    this.getOfferDetails();
  }
  getOfferDetails() {
    this.route.paramMap.subscribe(
      params => {
        if (!params.has('offerId')) {
          this.navCtrl.navigateBack('/places/offers');
          return;
        }
        this.placesService.getOfferById(params.get('offerId')).subscribe(
          offer => this.offer = offer
        )
      }
    )
  }

}
