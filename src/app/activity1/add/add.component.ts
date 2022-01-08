import { Component, OnInit } from '@angular/core';
import { BakedGood } from 'src/app/models/baked-goods.model';

@Component({
  selector: 'mp-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddBakedGoodComponent implements OnInit {

  bakedGood = {} as BakedGood;

  constructor() { }

  ngOnInit(): void {
  }

}
