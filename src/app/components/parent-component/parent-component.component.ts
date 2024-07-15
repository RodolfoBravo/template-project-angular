import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrl: './parent-component.component.scss'
})
export class ParentComponentComponent {
  parentMessage: string = 'Hello from Parent Component as Parameter!';

  handleChildMessage(message: string) {
    alert(`Message from Child: ${message}`);
  }
}
