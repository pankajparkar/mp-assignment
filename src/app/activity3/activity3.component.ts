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
      .then(res => res.json())
      .then(async (res) => {
        return {
          data: res.data,
          success: true
        };
      }).catch((error) => {
        return {
          data: error,
          success: false
        };
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
