import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input() counter = 0;

  increment(): void {
    this.counter += 1;
  }

  decrement(): void {
    this.counter -= 1;
  }
}
