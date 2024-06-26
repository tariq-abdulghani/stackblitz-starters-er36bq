import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { FoodFakeService } from './food-fake.service';

@Injectable()
export class FoodEffects {
  constructor(private action$: Actions, private foodService: FoodFakeService) {}
  loadFood$ = createEffect(() =>
    this.action$.pipe(
      ofType('GET_FOODS'),
      mergeMap((action) =>
        this.foodService.getFood().pipe(
          map((data) => ({ type: 'GET_FOODS_SUCCESS', payload: data })),
          catchError(() => of({ type: 'GET_FOODS_FAILURE' }))
        )
      )
    )
  );
}
