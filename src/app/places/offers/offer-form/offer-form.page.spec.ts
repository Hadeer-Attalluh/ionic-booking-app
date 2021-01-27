import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OfferFormPage } from './offer-form.page';

describe('OfferFormPage', () => {
  let component: OfferFormPage;
  let fixture: ComponentFixture<OfferFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OfferFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
