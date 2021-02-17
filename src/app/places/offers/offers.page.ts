import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../_models/place';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  offers: Place[];
  constructor(private offerService: PlacesService) { }

  ngOnInit() {
    this.offerService.getDiscoverPlaces().subscribe(
      offers => this.offers = offers
    )
  }

}
