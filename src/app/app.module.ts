import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { PositionService } from './service/position.service';
import { DeviceService } from './service/device.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB0WqLqEbFYfALW8_Nm-wHwP-fYvP17sHY'
    })
  ],
  providers: [PositionService, DeviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
