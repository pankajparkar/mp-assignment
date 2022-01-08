import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Activity3Service {

  constructor() { }

  async getLocations() {
    return fetch(
      ' https://api.megaport.com/v2/locations',
      { method: 'GET' },
    )
    .then(async (res) => {
      return await res.json();
    });
  }
}
