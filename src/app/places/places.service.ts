import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Place } from './_models/place';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private places = [
    new Place({
      id: '2',
      title: 'place 2',
      description: 'xyz 2',
      price: 120,
      imageUrl: "https://www.lindsaysilberman.com/wp-content/uploads/2020/02/The_10_Most_Instagrammable_Places_in_London-09.jpg"
    }),
    new Place({
      id: '1',
      title: 'place 1',
      description: 'xyz 1',
      price: 100
    }),
    new Place({
      id: '3',
      title: 'place 3',
      description: 'xyz 3',
      price: 300,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1D-FtE5EQrPPgl54LyOZj82XdRHggArZJLg&usqp=CAU"
    }),
  ]
  constructor() { }

  getDiscoverPlaces(): Observable<Place[]> {
    return of([...this.places]);
  }

  getOfferPlaces(): Observable<Place[]> {
    return of([...this.places]);
  }

  getOfferById(offerId: string): Observable<Place> {
    const place = this.places.find(p => p.id === offerId);
    return place ? of({ ...place }) : throwError(new Error());
  }
}
