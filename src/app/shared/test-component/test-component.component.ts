import { Component, inject } from '@angular/core';
import { ExampleService } from '../services/example.service';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrl: './test-component.component.scss'
})
export class TestComponentComponent {
  private service: ExampleService = inject(ExampleService)

  list: number[] = [0, 2, 3]

  constructor(/*private service: ExampleService*/) {
    //console.log(service.getData());
    console.log(this.service.getData());
  }
}
