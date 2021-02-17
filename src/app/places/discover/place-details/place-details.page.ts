import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PlacesService } from '../../places.service';
import { Place } from '../../_models/place';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.page.html',
  styleUrls: ['./place-details.page.scss'],
})
export class PlaceDetailsPage implements OnInit {
  place: Place;
  constructor(private route: ActivatedRoute,
    private navCtrl: NavController,
    private placesService: PlacesService) { }

  ngOnInit() {
    this.getPlaceDetails();
  }
  getPlaceDetails() {
    this.route.paramMap.subscribe(
      params => {
        if (!params.has('placeId')) {
          this.navCtrl.navigateBack('/places/discover');
          return;
        }
        this.placesService.getOfferById(params.get('placeId')).subscribe(
          place => this.place = place
        )
      }
    )
  }
  bookPlace() {
    // book and go back
    this.navCtrl.navigateBack('/places/discover');
  }

}
