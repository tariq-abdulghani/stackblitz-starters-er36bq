import { Component, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { StoreModule, provideStore } from '@ngrx/store';
import { food_reducer } from './food/food.reducer';
import { FoodListComponent } from './food/food-components/food-list.component';
import { FoodFormComponent } from './food/food-components/food-form.components';
import { FoodFakeService } from './food/food-components/food-fake.service';

import { EffectsModule } from '@ngrx/effects';
import { FoodEffects } from './food/food-components/food-effects';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FoodFormComponent, FoodListComponent],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
    <app-food-form></app-food-form>
    <app-food-list></app-food-list>
  `,
})
export class App {
  name = 'tariq';
}

bootstrapApplication(App, {
  providers: [
    // provideStore(),
    importProvidersFrom(StoreModule.forRoot({ foods: food_reducer })),
    importProvidersFrom(EffectsModule.forRoot(FoodEffects)),
    FoodFakeService,
  ],
});
