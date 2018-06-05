import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Position} from "../position";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PositionService {

  private readonly locationApi = "http://127.0.0.1:8080/position/2";

  constructor(private httpClient: HttpClient) { }

  getDeviceSpecificLocation(): Observable<Position>{
    return this.httpClient.get(this.locationApi)
      .catch(this.handleErrorObservable);
  }

  private handleErrorObservable (error: Response | any) {
    console.error("service error: ",error.message || error);
    return Observable.throw(error.message || error);
  }

}
