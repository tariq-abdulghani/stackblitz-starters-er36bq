import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { FoodFakeService } from './food-fake.service';
import { ACTIONS } from '../food.reducer';

@Injectable()
export class FoodEffects {
  constructor(private action$: Actions, private foodService: FoodFakeService) {}
  loadFood$ = createEffect(() =>
    this.action$.pipe(
      ofType(ACTIONS.GET_FOOD),
      mergeMap((action) =>
        this.foodService.getFood().pipe(
          map((data) => ({ type: ACTIONS.GET_FOOD_SUCCESS, payload: data })),
          catchError(() => of({ type: ACTIONS.GET_FOOD_FAILURE}))
        )
      )
    )
  );
}
