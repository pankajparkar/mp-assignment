import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BakedGoods } from '../models/baked-goods.model';
import { BAKED_GOODS } from '../data/baked-goods';

@Injectable({
  providedIn: 'root'
})
export class BakedGoodsService {

  private bakedGoods = new BehaviorSubject<BakedGoods[]>(BAKED_GOODS);
  bakedGoods$ = this.bakedGoods.asObservable();

  constructor() { }

  addbakedGoods(bakedGood: BakedGoods) {
    const bakedGoods = this.bakedGoods.getValue();
    // TODO: add validation here
    if (bakedGood) {
      bakedGoods.push(bakedGood);
      this.bakedGoods.next(bakedGoods);
    }
  }

  // TODO: implementation yet to be done
  removebakedGoods(bakedGood: BakedGoods) {
  }
}
