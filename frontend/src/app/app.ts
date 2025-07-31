import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { FoodDisplay } from './food-display/food-display';
import { UserMeals } from './user-meals/user-meals';
import { CurrentFood } from './current-food/current-food';
import { ButtonTest } from './button-test/button-test'; 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FoodDisplay, CurrentFood, UserMeals, Navbar, ButtonTest],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
