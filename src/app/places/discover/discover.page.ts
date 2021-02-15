import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../_models/place';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  places: Place[];
  constructor(private placesService: PlacesService) { }

  ngOnInit() {
    this.placesService.getDiscoverPlaces().subscribe(
      places => this.places = places
    )
  }

}
