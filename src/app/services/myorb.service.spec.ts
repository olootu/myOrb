/* tslint:disable:no-unused-variable */

import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';
import { MyorbService } from './myorb.service';

describe('Service: Myorb', () => {
  let myOrbService: MyorbService;
  let httpController: HttpTestingController;
  let reqUrl = 'http://localhost:4200/assets/data.json';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [MyorbService]
    }).compileComponents()
  });

  beforeEach(() => {
    myOrbService = TestBed.inject(MyorbService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
  })

  it('should ...', inject([MyorbService], (service: MyorbService) => {
    expect(service).toBeTruthy();
  }));

  it('should get the getSnomeCT() and use GET method', inject([MyorbService], (service: MyorbService) => {
    myOrbService.getEmployees().subscribe();

    const testRequest = httpController.expectOne(reqUrl);
    expect(testRequest.request.method).toEqual('GET');
    testRequest.flush({});
  }));
});
