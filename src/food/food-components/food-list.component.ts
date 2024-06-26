import { AsyncPipe, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ACTIONS, Action, AppState, IFOOD } from '../food.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [NgFor, AsyncPipe],
  template: `
    <h1>Foods: {{ (foods|async)?.length}}</h1>
    <p *ngFor="let food of foods | async">
      <!-- <span> {{food.id}}</span> -->
      <span>{{food.name}}</span>
      <button (click)="deleteFood(food)">delete</button>
    </p>
  `,
})
export class FoodListComponent implements OnInit {
  foods!: Observable<Array<IFOOD>>;

  constructor(private store: Store<AppState>) {
    this.foods = store.select('foods');
  }

  ngOnInit(): void {
    let getAction = { type: ACTIONS.GET_FOOD };
    this.store.dispatch(getAction);
  }

  deleteFood(food: IFOOD) {
    let deleteAction: Action = {
      type: ACTIONS.REMOVE_FOOD,
      payload: Object.assign({}, food),
    };
    this.store.dispatch(deleteAction);
  }
}
