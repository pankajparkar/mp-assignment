import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BakedGoods } from '../models/backed-goods.model';
import { BAKED_GOODS } from '../data/baked-goods';

@Injectable({
  providedIn: 'root'
})
export class BakedGoodsService {

  private backedGoods = new BehaviorSubject<BakedGoods[]>(BAKED_GOODS);
  backedGoods$ = this.backedGoods.asObservable();

  constructor() { }

  addBackedGoods(bakedGood: BakedGoods) {
    const backedGoods = this.backedGoods.getValue();
    // TODO: add validation here
    if (bakedGood) {
      backedGoods.push(bakedGood);
      this.backedGoods.next(backedGoods);
    }
  }

  // TODO: implementation yet to be done
  removeBackedGoods(bakedGood: BakedGoods) {
  }
}
