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
    // call the api when drag ends
    let returnVal = this.apiService.insertCirclePosition(this.circleInfo);
    returnVal.subscribe({
      next: value => console.log("Emitted value "+JSON.stringify(value)),
      complete: () => console.log('Observable completed'),
      error: err => console.error(err)
    })

  }

  dragMoved(event: CdkDragMove) {
    this.circleInfo.componentId = this.componentId;
    this.circleInfo.coordinateX = event.pointerPosition.x;
    this.circleInfo.coordinateY = event.pointerPosition.y;
    this.position = `Position X: ${event.pointerPosition.x}, Y: ${event.pointerPosition.y}`;
  }

}
