import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObjectService {

  constructor() { }

  getUniques(array: any[], property: string) {
    const items = array.map(
      (item) => item[property]
    );
    return [...new Set(items)];
  }

  // TODO: implementation
  sortBy() {

  }

}
