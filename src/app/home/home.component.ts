import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TarvelService } from '../services/travel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

constructor(private router:Router , private travelService : TarvelService){}


ngOnInit(): void {
}

}
