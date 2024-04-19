import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaChildComponent } from './ruta-child.component';

describe('RutaChildComponent', () => {
  let component: RutaChildComponent;
  let fixture: ComponentFixture<RutaChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RutaChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RutaChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
