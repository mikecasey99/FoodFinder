import { Routes } from '@angular/router';
import { FoodDisplay } from './food-display/food-display';
import { CurrentFood } from './current-food/current-food';
import { UserMeals } from './user-meals/user-meals';

export const routes: Routes = [
    {path: '', component: FoodDisplay},
    {path: 'mymeals', component: UserMeals}
];
