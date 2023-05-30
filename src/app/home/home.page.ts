import { Component } from '@angular/core';
import {
  AppTrackingStatusResponse,
  AppTrackingTransparency,
} from 'capacitor-plugin-app-tracking-transparency';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  public async getStatus(): Promise<AppTrackingStatusResponse> {
    const response = await AppTrackingTransparency.getStatus();

    console.log(response);
    // { status: 'authorized' } for example

    return response;
  }

  public async requestPermission(): Promise<AppTrackingStatusResponse> {
    const response = await AppTrackingTransparency.requestPermission();

    console.log(response);
    // { status: 'authorized' } for example

    return response;
  }
}
