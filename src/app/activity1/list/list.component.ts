import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { BakedGood } from 'src/app/models/baked-goods.model';
import { BakedGoodsService } from '../../services/baked-goods.service';

interface BakedGoodSorting {
  id?: boolean;
  name?: boolean;
  type?: boolean;
}

@Component({
  selector: 'mp-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class BakedGoodListComponent implements OnInit {

  sorting = {} as BakedGoodSorting;
  
  private sorting$ = new BehaviorSubject(this.sorting);
  @ViewChild('form', {static: true}) form!: NgForm; 

  backedGood$ = combineLatest(this.bakedGoodsService.bakedGoods$, this.sorting$).pipe(
    map(([bakedGoods, sorting]) => {
      const { id, name, type} = sorting;
      return bakedGoods.sort((a: any, b: any) => {
        return (
          (!id || (b.id - a.id)) ||
          (!type && a.type.localeCompare(b.type)) ||
          (!name && a.name.localeCompare(b.name))
        );
      });
    })
  );
  ids = this.bakedGoodsService.getUniques('id');
  types = this.bakedGoodsService.getUniques('type');
  batters = this.bakedGoodsService.getUniques('name');

  constructor(
    private bakedGoodsService: BakedGoodsService
  ) {
  }

  changeSorting(property: 'id'|'name'|'type') {
    this.sorting[property] = !this.sorting[property];
    this.sorting$.next(this.sorting);
  }

  clearSorting() {
    this.sorting = {} as BakedGoodSorting;
  }

  ngOnInit(): void {
  }

}

