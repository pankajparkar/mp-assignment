import { Component, OnInit } from '@angular/core';
import { BakedGoodsService } from './baked-goods.service';

@Component({
  selector: 'mp-activity1',
  templateUrl: './activity1.component.html',
  styleUrls: ['./activity1.component.css']
})
export class Activity1Component implements OnInit {

  backedGood$ = this.bakedGoodsService.bakedGoods$.pipe(

  );

  constructor(
    private bakedGoodsService: BakedGoodsService
  ) { }

  ngOnInit(): void {
  }

}
