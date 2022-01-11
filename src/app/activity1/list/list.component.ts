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
      
      // TODO: at a time only one sorting happening, make it multiple column base sort
      return [...filteredResult].sort((a: any, b: any) => {
        return (
          (sorting.id != undefined ? (sorting.id ? b.id - a.id: a.id - b.id): -1) && 
          (sorting.name != undefined ? (sorting.name ? b.name.localeCompare(a.name): a.name.localeCompare(b.name)): -1) &&
          (sorting.type != undefined ? (
            sorting.type ? b.type.localeCompare(a.type): a.type.localeCompare(b.type)
          ): -1)
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

