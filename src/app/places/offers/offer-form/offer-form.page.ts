import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PlacesService } from '../../places.service';
import { Place } from '../../_models/place';

@Component({
  selector: 'app-offer-form',
  templateUrl: './offer-form.page.html',
  styleUrls: ['./offer-form.page.scss'],
})
export class OfferFormPage implements OnInit {
  offerForm: FormGroup;
  editMode: boolean;
  originalOffer: Place;
  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private placesService: PlacesService
  ) {
    this.buildForm();
  }

  ngOnInit() {
    this.configureEditOrCreate();
  }

  get controls() {
    return this.offerForm.controls;
  }
  private buildForm() {
    this.offerForm = new FormGroup({
      id: new FormControl(null),
      title: new FormControl({ value: '', disabled: false }, Validators.required),
      description: new FormControl('', Validators.required),
      price: new FormControl(null, Validators.required),
      imageUrl: new FormControl(''),
    });
  }

  private configureEditOrCreate() {
    this.route.paramMap.subscribe(
      params => {
        if (params.has('offerId')) {
          this.editMode = true;
          this.placesService.getOfferById(params.get('offerId')).subscribe(
            offer => {
              this.originalOffer = offer;
              this.offerForm.patchValue({ ...offer });
              this.controls.title.disable();
            },
            error => this.navCtrl.navigateBack('/places/offers')
          )
          return;
        }
        this.editMode = false;
      }
    )
  }

  submitForm() {
    console.log(this.offerForm.value);
  }
  goBack() {
    //if edit
    //if new
  }
}
