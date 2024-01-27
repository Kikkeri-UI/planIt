import { Injectable } from '@angular/core';
import { HttpClientModule, HttpHeaders, HttpParams, HttpClient} from '@angular/common/http';
import { environment } from '../environments/environment';
import {Root} from '../models/travel.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarvelService {

  constructor(private http: HttpClient) { }

  getDataByCityName(cityName:string) : Observable<Root> {
    return this.http.get<Root>(environment.travelApiBaseUrl, {
      headers:new HttpHeaders()
      .set(environment.XRapidAPIKeyName,environment.XRapidAPIKeyValue)
      .set(environment.XRapidAPIHostName,environment.XRapidAPIHostValue),
      params: new HttpParams()
      .set('query', cityName)
      .set('limit',10)
      .set('lang','en_US')
      .set('unit','km')
      .set('mode','json')
    })
  }

  // getSpecificTravelInfo(cityName:string,specifics:string){
  //   return this.http.get<Result>(environment.travelApiBaseUrl, {
  //     headers:new HttpHeaders()
  //     .set(environment.XRapidAPIKeyName,environment.XRapidAPIKeyValue)
  //     .set(environment.XRapidAPIHostName,environment.XRapidAPIHostValue),
  //     params: new HttpParams()
  //     .set('query', cityName)
  //     .set('query',specifics)
  //     .set('lang','en_US')
  //     .set('unit','km')
  //     .set('mode','json')
  //   })
  // }
}
