import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { CircleInfo } from '../model/circle-info';

describe('ApiService unit test ...', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verify that no outstanding requests are pending
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should insert circle position', () => {
    let circleInfo: CircleInfo = new CircleInfo();
    circleInfo.componentId = 100;
    circleInfo.coordinateX = 10;
    circleInfo.coordinateY = 20;

    service.insertCirclePosition(circleInfo).subscribe(response => {
      expect(response).toBeTruthy();
      expect(response.componentId).toEqual(circleInfo.componentId);
      expect(response.coordinateX).toEqual(circleInfo.coordinateX);
      expect(response.coordinateY).toEqual(circleInfo.coordinateY);
    });

    const request = httpMock.expectOne('http://localhost:8080/insert/circleInfo');
    expect(request.request.method).toBe('POST');
    request.flush(circleInfo);
  });
});

