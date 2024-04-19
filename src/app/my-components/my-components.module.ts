import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ruta1Component } from './ruta1/ruta1.component';
import { Ruta2Component } from './ruta2/ruta2.component';
import { RutaChildComponent } from './ruta-child/ruta-child.component';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { testGuard } from './test.guard';

const routes: Routes = [
  {
    path: 'route-1',
    component: Ruta1Component
  },
  {
    path: 'route-2',
    component: Ruta2Component,
    children: [
      {
        path: 'ruta-child',
        component: RutaChildComponent
      }
    ]
  },
  {
    path: 'detail/:id',
    component: DetailComponent,
    canActivate: [testGuard]
  },
  {
    path: '**',
    redirectTo: 'route-1'
  }
]

@NgModule({
  declarations: [
    Ruta1Component,
    Ruta2Component,
    RutaChildComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class MyComponentsModule { }
