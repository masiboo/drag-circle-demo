import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggableCircleComponent } from './draggable-circle.component';

describe('DraggableCircleComponent', () => {
  let component: DraggableCircleComponent;
  let fixture: ComponentFixture<DraggableCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DraggableCircleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DraggableCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
