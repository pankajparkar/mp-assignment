import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mp-activity2',
  templateUrl: './activity2.component.html',
  styleUrls: ['./activity2.component.css']
})
export class Activity2Component implements OnInit {

  info = {
    name: 'Megaport',
    address: {
      office: {
        unit: 'Level 3',
        street: '825 Ann Street',
        suburb: 'Fortitude Valley',
        city: 'Brisbane',
        state: 'Queensland',
        postcode: 4006,
      },
    },
    industry: {
      type: 'Internet and telecommunications',
      asxListed: true,
    },
  };

  code = `
    /**
     * get the value of the property
     * @param {String} path - the object path ie. 'address.office.state'
     * @obj {Object} the object
     */
    getValue(path, obj) {
      const paths = path.split('.');
      const result = paths.reduce(
        (last, current) => last[current],
        obj
      );
      return result;
    }
  `;

  constructor() { }

  /**
  * get the value of the property
  * @param {String} path - the object path ie. 'address.office.state'
  * @obj {Object} the object
  */
  getValue(path: string, obj: any) {
    const paths = path.split('.');
    const result = paths.reduce(
      (last, current) => last[current],
      obj
    );
    return result;
  }

  ngOnInit(): void {
  }

}
