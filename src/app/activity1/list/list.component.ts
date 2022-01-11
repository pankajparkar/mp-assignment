import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { BakedGoodsService } from '../../services/baked-goods.service';

interface BakedGoodSorting {
  id?: boolean;
  name?: boolean;
  type?: boolean;
  search: string;
}

@Component({
  selector: 'mp-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class BakedGoodListComponent implements OnInit {

  sorting = {} as BakedGoodSorting;
  sorting$ = new BehaviorSubject(this.sorting);
  ids = this.bakedGoodsService.getUniques('id');
  types = this.bakedGoodsService.getUniques('type');
  batters = this.bakedGoodsService.getUniques('name');
  backedGood$ = combineLatest(
    this.bakedGoodsService.bakedGoods$,
    this.sorting$
  ).pipe(
    map(([bakedGoods, sorting]) => {
      const { id, name, type} = sorting;
      let search = (sorting.search || '').toLocaleLowerCase();
      const filteredResult = search ? bakedGoods.filter(
        bakedGood => (
          (bakedGood.id).toString().includes(search) || 
          (bakedGood.type.toLocaleLowerCase()).includes(search) || 
          (bakedGood.name.toLocaleLowerCase()).includes(search) || 
          (bakedGood.topping.toLocaleLowerCase()).includes(search)
        )
      ): bakedGoods;
      return [...filteredResult].sort((a: any, b: any) => {
        return (
          (!id || (b.id - a.id)) ||
          (!type && a.type.localeCompare(b.type)) ||
          (!name && a.name.localeCompare(b.name))
        );
      });
    })
  );
  @ViewChild('form', {static: true}) form!: NgForm; 

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

