import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { FoodDisplay } from './food-display/food-display';
import { UserMeals } from './user-meals/user-meals';
import { CurrentFood } from './current-food/current-food';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FoodDisplay, CurrentFood, UserMeals, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
