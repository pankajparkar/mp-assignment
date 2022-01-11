import { Injectable } from '@angular/core';

interface Street {
  street: string;
  suburb: string;
  city: string;
  state: string;
  country: string;
}

// TODO: fill in all properties of Location
interface Location {
  address: Street,
  campus: string;
  country: string;
  siteCode: string;
  status: string;
  vRouterAvailable: boolean;
}

interface LocationResponse {
  data: Location[],
  message: string;
  terms: string;
}

interface Response<T> {
  data: T;
  success: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class Activity3Service {

  constructor() { }

  async getLocations(): Promise<Response<Location[]|unknown>> {
    return fetch(
      ' https://api.megaport.com/v2/locations',
      { method: 'GET' },
    )
    .then(res => res.json())
    .then(async (res: LocationResponse) => {
      return {
        data: res.data,
        success: true
      };
    }).catch((error: unknown) => {
      return {
        data: error,
        success: false
      };
    });
  }
}
