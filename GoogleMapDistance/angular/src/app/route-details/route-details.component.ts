import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-details',
  templateUrl: './route-details.component.html',
  styleUrls: ['./route-details.component.scss']
})
export class RouteDetailsComponent implements OnInit {
  public visible = false;
  public latitude = 50.834697;
  public longitude = -0.773792;
  public mapType = 'roadmap';
  public zoom = 13;
  public origin: any;
  public destination: any;

  constructor() {}

  ngOnInit() {
    // this.getDirection();
  }

  getDirection() {
    this.visible = true;
    this.origin = '';
    this.destination = '';

    // Location within a string
    // this.origin = 'Taipei Main Station';
    // this.destination = 'Taiwan Presidential Office';
  }
}
