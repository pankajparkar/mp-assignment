import { Component, OnInit } from '@angular/core';
import { BakedGoodsService } from '../baked-goods.service';

@Component({
  selector: 'mp-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class BakedGoodListComponent implements OnInit {

  backedGood$ = this.bakedGoodsService.bakedGoods$.pipe(
  );

  constructor(
    private bakedGoodsService: BakedGoodsService
  ) { }

  ngOnInit(): void {
  }

}

