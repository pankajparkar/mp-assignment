import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BakedGood } from 'src/app/models/baked-goods.model';
import { BakedGoodsService } from '../../services/baked-goods.service';

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

  constructor(
    private bakedGoodsService: BakedGoodsService,
    private router: Router,
  ) { }

  addBakeGood(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.bakedGoodsService.addbakedGoods(this.bakedGood);
    alert('Baked good added successfully.');
    this.router.navigate(['../list']);
  }

  ngOnInit(): void {
  }

}
