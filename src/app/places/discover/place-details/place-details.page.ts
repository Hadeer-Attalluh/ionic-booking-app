import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.page.html',
  styleUrls: ['./place-details.page.scss'],
})
export class PlaceDetailsPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.getPlaceDetails();
  }
  getPlaceDetails() {
    console.log('get data');
  }
  bookPlace() {
    // book and go back
    this.navCtrl.navigateBack('/places/discover');
  }

}
