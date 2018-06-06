import {Component, OnInit} from '@angular/core';
import {PositionService} from "./service/position.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Position} from "./position";
import {Observable} from "rxjs/Observable";
import {IntervalObservable} from "rxjs/observable/IntervalObservable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Device tracker app';
  locations: Position[];

  constructor(private positionService : PositionService){}

  ngOnInit(){

    IntervalObservable.create(10000)
      .subscribe(() => {
        this.getPosition();
      });
  }

  getPosition(){

    this.positionService.getDeviceSpecificLocation().subscribe(
      data => this.locations = data,
      (err: HttpErrorResponse) => {
        console.error("ComponentError: ",err);
      },
    );

  }

}
