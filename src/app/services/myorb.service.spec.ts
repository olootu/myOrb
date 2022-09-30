/* tslint:disable:no-unused-variable */

import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';
import { MyorbService } from './myorb.service';

describe('Service: Myorb', () => {
  let myOrbService: MyorbService;
  let httpController: HttpTestingController;
  let reqUrl = 'https://terms.myorb.com:9000/browser/MAIN/descriptions?term=rus&sematicTags=procedure&active=true&conceptActive=true&lang=english&limit=200&offset=0&groupByConcept=true'
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
    myOrbService.getSnomeCT('rus').subscribe();

    const testRequest = httpController.expectOne(reqUrl);
    expect(testRequest.request.method).toEqual('GET');
    testRequest.flush({});
  }));
});
