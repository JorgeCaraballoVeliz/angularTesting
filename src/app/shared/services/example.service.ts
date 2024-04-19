import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  constructor() { }

  getData(): string {
    return "I AM A SERVICE";
  }
}
