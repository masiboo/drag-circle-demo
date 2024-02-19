import { TestBed, ComponentFixture } from '@angular/core/testing';
import { DraggableCircleComponent } from './draggable-circle.component';
import { CdkDragEnd, CdkDragMove } from '@angular/cdk/drag-drop';
import { CircleInfo } from '../model/circle-info';
import { ApiService } from '../service/api.service';

describe('DraggableCircleComponent', () => {
  let component: DraggableCircleComponent;
  let fixture: ComponentFixture<DraggableCircleComponent>;
  let apiServiceMock: jasmine.SpyObj<ApiService>;

  beforeEach(async () => {
    const apiServiceSpy = jasmine.createSpyObj('ApiService', ['insertCirclePosition']);

    await TestBed.configureTestingModule({
      declarations: [DraggableCircleComponent],
      providers: [{ provide: ApiService, useValue: apiServiceSpy }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DraggableCircleComponent);
    component = fixture.componentInstance;
    apiServiceMock = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set componentId if not provided', () => {
    expect(component.componentId).toBeGreaterThanOrEqual(100);
  });

  it('should call insertCirclePosition on dragEnd', () => {
    const eventMock = { pointerPosition: { x: 10, y: 20 } } as any;
    component.circleInfo = { componentId: 100, coordinateX: 10, coordinateY: 20 } as CircleInfo;

    component.dragEnded(eventMock);

    expect(apiServiceMock.insertCirclePosition).toHaveBeenCalledWith(component.circleInfo);
  });

  it('should update circleInfo on dragMove', () => {
    const eventMock = { pointerPosition: { x: 30, y: 40 } } as CdkDragMove;

    component.dragMoved(eventMock);

    expect(component.circleInfo.componentId).toEqual(component.componentId);
    expect(component.circleInfo.coordinateX).toEqual(eventMock.pointerPosition.x);
    expect(component.circleInfo.coordinateY).toEqual(eventMock.pointerPosition.y);
  });

});
