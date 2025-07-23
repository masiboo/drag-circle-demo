import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { CircleInfo } from '../model/circle-info'
import { CdkDragEnd, CdkDragMove } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-draggable-circle',
  templateUrl: './draggable-circle.component.html',
  styleUrls: ['./draggable-circle.component.css']
})
export class DraggableCircleComponent {
  public circleInfo: CircleInfo = new CircleInfo();
  public position = '';

  constructor(private apiService: ApiService) {
    this.initStart();
  }


  initStart() {
    this.apiService.getLastCirclePosition().subscribe({
      next: value => {
        console.log("Fetched last circle position: ", value);

        this.circleInfo = value;

        // Ensure componentId is not zero
        if (!this.circleInfo.componentId || this.circleInfo.componentId === 0) {
          this.circleInfo.componentId = Math.floor(Math.random() * 1000) || 100;
        }

        this.position = `Position X: ${this.circleInfo.coordinateX}, Y: ${this.circleInfo.coordinateY}`;
      },
      complete: () => console.log('Fetch completed'),
      error: err => {
        console.error('Error fetching last position:', err);
        // fallback to default position if backend fails
        this.circleInfo.coordinateX = 100;
        this.circleInfo.coordinateY = 100;
        this.circleInfo.componentId = Math.floor(Math.random() * 1000) || 100;
      }
    });
  }

  dragMoved(event: CdkDragMove) {
    // Only update the coordinates
    this.circleInfo.coordinateX = event.pointerPosition.x;
    this.circleInfo.coordinateY = event.pointerPosition.y;
    this.position = `Position X: ${this.circleInfo.coordinateX}, Y: ${this.circleInfo.coordinateY}`;

    // Avoid logging the full event object (circular reference)
    console.log("Circle moved to: ", this.circleInfo);
  }

  dragEnded(event: CdkDragEnd) {
    this.circleInfo.componentId = Math.floor(Math.random() * 1000) || 100;
    this.apiService.insertCirclePosition(this.circleInfo).subscribe({
      next: value => console.log("Circle saved to backend:", value),
      complete: () => console.log('Save completed'),
      error: err => console.error('Error saving circle:', err)
    });
  }

}
