import { Component } from '@angular/core';
import { TarvelService } from '../services/travel.service';
import { Root } from '../models/travel.model';

@Component({
  selector: 'app-create-itinerary',
  templateUrl: './create-itinerary.component.html',
  styleUrls: ['./create-itinerary.component.scss']
})
export class CreateItineraryComponent {
  cityName: string = '';
  keyword: string = '';
  placeHolder: string = 'Places to go, things to do, hotels';
  results: any;
  filteredArray: Array<any> = [];
  locationId: any;

  constructor(private travelService: TarvelService) { }

  setHotelKeyWord() {
    this.keyword = 'hotels';
    this.placeHolder = 'Hotel name or destination';
  }

  setAttractionsKeyWord() {
    this.keyword = 'attractions';
    this, this.placeHolder = 'Attraction, activity or destination';
  }

  setRestaurantKeyWord() {
    this.keyword = 'restaurants';
    this.placeHolder = 'Restaurant name or destination';
  }

  getTravelData() {
    this.getDataByCityName();
  }

  getDataByCityName() {
    this.travelService.getDataByCityName(this.cityName).subscribe({
      next: (response) => {
        console.log(response);
        this.results = response.data;
        for (var i = 0; i < this.results.length; i++) {
          if (this.results[i].result_type != 'geos') {
            this.filteredArray.push(this.results[i]);
          }
        }
        this.locationId = this.results[0].result_object.location_id;


        switch (this.keyword) {
          case 'hotels':
            this.filteredArray = this.filteredArray.filter((item: any) => item.result_type === 'lodging');
            this.getHotelData(this.locationId);
            break;
          case 'attractions':
            this.filteredArray = this.filteredArray.filter((item: any) => item.result_type === 'things_to_do' || item.result_type === 'activities');

            break;
          case 'restaurants':
            this.filteredArray = this.filteredArray.filter((item: any) => item.result_type === 'restaurants');

            break;
          default:
            const things_to_do = this.filteredArray.filter((item: any) => item.result_type === 'things_to_do');
            console.log(things_to_do);
            const activities = this.filteredArray.filter((item: any) => item.result_type === 'activities');
            console.log(activities);
            const lodging = this.filteredArray.filter((item: any) => item.result_type === 'lodging');
            console.log(lodging);
        }

        console.log(this.filteredArray);
      }
    });
  }

  getHotelData(locationId: number) {
    this.travelService.getHotelListByCityName(locationId).subscribe({
      next: (response) => {
        console.log(response);
      }
    })

  }


}




