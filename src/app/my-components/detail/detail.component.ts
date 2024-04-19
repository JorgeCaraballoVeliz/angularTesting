import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  private route: ActivatedRoute = inject(ActivatedRoute);
  detailId: string = '';
  constructor() {
    this.detailId = this.route.snapshot.paramMap.get('id')!;
    console.log(this.detailId);
  }
}
