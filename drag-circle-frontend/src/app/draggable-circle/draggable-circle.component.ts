import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { CircleInfo } from '../model/circle-info'
import { CdkDragEnd, CdkDragMove } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-draggable-circle',
  templateUrl: './draggable-circle.component.html',
  styleUrl: './draggable-circle.component.css'
})
export class DraggableCircleComponent {
  public circleInfo: CircleInfo = new CircleInfo;
  public position = '';
  public componentId: number = 0;

  constructor(private apiService: ApiService) {
    this.componentId =  Math.floor(Math.random() * 1000);
    if(this.componentId === 0){
      this.componentId =100;
    }
  }

  dragEnded(event: CdkDragEnd) {
    console.log("move end and call api here ");
    console.log(this.circleInfo);
  }

  dragMoved(event: CdkDragMove) {
    this.circleInfo.componentId = this.componentId;
    this.circleInfo.coordinateX = event.pointerPosition.x;
    this.circleInfo.coordinateY = event.pointerPosition.y;
    this.position = `Position X: ${event.pointerPosition.x}, Y: ${event.pointerPosition.y}`;
  }

}
