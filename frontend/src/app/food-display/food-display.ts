import { Component } from '@angular/core';
import { Toast } from "../toast/toast";

@Component({
  selector: 'app-food-display',
  imports: [Toast],
  templateUrl: './food-display.html',
  styleUrl: './food-display.css'
})
export class FoodDisplay {

  toaster(){
  } 
}
