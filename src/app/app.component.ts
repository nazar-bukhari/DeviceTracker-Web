import {Component, OnInit} from '@angular/core';
import {PositionService} from "./service/position.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Position} from "./position";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'tracker app';
  lat: any;
  lon: any;
  locations: Position;

  constructor(private positionService : PositionService){}

  ngOnInit(){
    this.getPosition();
  }

  getPosition(){

    this.positionService.getDeviceSpecificLocation().subscribe(
      data => {
        this.lat = data.latitude;
        this.lon = data.longitude;
      },
      (err: HttpErrorResponse) => {
        console.error("ComponentError: ",err);
      },
    );

  }

}
