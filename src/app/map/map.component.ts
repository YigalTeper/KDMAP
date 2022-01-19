import { environment } from '../../environments/environment';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Map } from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  map: any;
  style = 'mapbox://styles/mapbox/streets-v11';
  lng =  34.976832;
   lat = 31.272795;

  constructor() { }

  ngOnInit(): void {
    this.map = new Map({
      accessToken: environment.mapbox.accessToken,
      container: 'map',
      style: this.style,
      zoom: 6.6,
      center: [this.lng, this.lat]
    });
    
  }

}
