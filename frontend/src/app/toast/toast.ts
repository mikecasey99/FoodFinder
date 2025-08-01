import { Component, EventEmitter, Output } from '@angular/core';
import { HotToastService } from '@ngxpert/hot-toast'; 



@Component({
  selector: 'app-toast',
  imports: [],
  templateUrl: './toast.html',
  styleUrl: './toast.css'
})
export class Toast {
  constructor(private toast: HotToastService) {}
  
  @Output() toastClicked = new EventEmitter<void>();
  
  addToMyMeals() {
    this.toast.success('Meal added to favorites!', {
      style: {
        border: '1px solid #713200',
        padding: '16px',
        color: '#713200',
      },
      position: 'bottom-right'
    });
    this.toastClicked.emit();
  }
}
