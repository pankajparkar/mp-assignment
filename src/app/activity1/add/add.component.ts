import { Component, OnInit } from '@angular/core';
import { BakedGood } from 'src/app/models/baked-goods.model';
import { BakedGoodsService } from '../baked-goods.service';

@Component({
  selector: 'mp-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddBakedGoodComponent implements OnInit {

  bakedGood = {} as BakedGood;
  ids = this.bakedGoodsService.getUniques('id');
  types = this.bakedGoodsService.getUniques('type');
  batters = this.bakedGoodsService.getUniques('name');

  constructor(private bakedGoodsService: BakedGoodsService) { }

  ngOnInit(): void {
  }

}
