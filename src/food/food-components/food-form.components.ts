import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ACTIONS, Action, AppState, IFOOD } from '../food.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-food-form',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h1>add Food</h1>
    <form>
      <label>Name: <input name="name" [(ngModel)]="food.name" type="text"></label>
      <br>
      <label>Description: <input name="description" [(ngModel)]="food.description" type="text"></label> <br>
      <label>Color: <input name="color" [(ngModel)]="food.color" type="text"></label> 
      <br>
      <label>Group <input name="group" [(ngModel)]="food.group" type="text"></label>
    </form>
    <button (click)="addFood()">add food</button>
  `,
})
export class FoodFormComponent {
  constructor(private store: Store<AppState>) {}
  food: IFOOD = {
    id: 0,
    name: '',
    description: '',
    color: '',
    group: '',
  };

  addFood() {
    let addAction: Action = {
      type: ACTIONS.ADD_FOOD,
      payload: Object.assign({}, this.food),
    };

    this.store.dispatch(addAction);
  }
}
