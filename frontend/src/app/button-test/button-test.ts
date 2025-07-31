import { Component } from '@angular/core';
import { HotToastService } from '@ngxpert/hot-toast'; 



@Component({
  selector: 'app-button-test',
  imports: [],
  standalone: true,
  templateUrl: './button-test.html',
  styleUrl: './button-test.css'
})
export class ButtonTest {
  constructor(private toast: HotToastService) {}
  
  addToMyMeals() {
    this.toast.success('Meal added to favorites!', {
      style: {
        border: '1px solid #713200',
        padding: '16px',
        color: '#713200',
      },
      position: 'bottom-right'
    });
  }
}
