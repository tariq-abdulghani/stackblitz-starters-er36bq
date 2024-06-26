import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IFOOD } from '../food.reducer';

@Injectable()
export class FoodFakeService {
  getFood(): Observable<IFOOD[]> {
    return of([
      {
        id: 0,
        name: 'apple-g',
        color: 'green',
        description: 'green apple',
        group: 'fruits',
      },
      {
        id: 1,
        name: 'apple-r',
        color: 'red',
        description: 'red apple',
        group: 'fruits',
      },
      {
        id: 2,
        name: 'fish',
        color: 'blue',
        description: 'blue fish',
        group: 'fish',
      },
      {
        id: 3,
        name: 'beef',
        color: 'red',
        description: 'cow beed',
        group: 'beef',
      },
      {
        id: 4,
        name: 'chicked strips',
        color: 'beige',
        description: 'fresh chicken strips',
        group: 'chicked',
      },
    ]);
  }
}
