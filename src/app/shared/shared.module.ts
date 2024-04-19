import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponentComponent } from './test-component/test-component.component';
import { ExamplePipe } from './pipes/example.pipe';
import { ExampleDirective } from './directive/example.directive';



@NgModule({
  declarations: [
    TestComponentComponent,
    ExamplePipe,
    ExampleDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TestComponentComponent
  ]
})
export class SharedModule { }
