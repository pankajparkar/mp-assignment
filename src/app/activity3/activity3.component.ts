import { Component, OnInit } from '@angular/core';
import { Activity3Service } from './activity3.service';

@Component({
  selector: 'mp-activity3',
  templateUrl: './activity3.component.html',
  styleUrls: ['./activity3.component.css']
})
export class Activity3Component implements OnInit {
  code = `
    async getLocations() {
      return fetch(
        ' https://api.megaport.com/v2/locations',
        { method: 'GET' },
      )
      .then(async (res) => {
        return await res.json();
      });
    }
  `;

  constructor(
    private activity3Service: Activity3Service,
  ) { }

  async ngOnInit() {
    console.log(await this.activity3Service.getLocations());
  }

}
