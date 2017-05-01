import {MockBackend, MockConnection} from '@angular/http/testing';
import {Http, BaseRequestOptions, Response, ResponseOptions} from '@angular/http';
import {Component, Input} from '@angular/core';
import {GpusComponent, Gpu} from './gpus';
import {TestBed, inject, async} from '@angular/core/testing';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'lugbench-gpu',
  template: ''
})
class MockGpuComponent {
  @Input() public gpu: Gpu;
}

const gpusJson = [
  {
  },
  {
  },
  {
  }
];

describe('gpus component', () => {
  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [
  //       GpusComponent,
  //       MockGpuComponent
  //     ],
  //     providers: [
  //       MockBackend,
  //       BaseRequestOptions,
  //       {
  //         provide: Http, useFactory: (backend, defaultOptions) => new Http(backend, defaultOptions),
  //         deps: [MockBackend, BaseRequestOptions]
  //       }
  //     ]
  //   });
  //   TestBed.compileComponents();
  // }));

  // describe('gpus component methods', () => {
  //   it('should get gpus', inject([MockBackend], (mockBackend: MockBackend) => {
  //     const fixture = TestBed.createComponent(GpusComponent);
  //     const gpus: GpusComponent = fixture.componentInstance;
  //     let conn: MockConnection;
  //     const response = new Response(new ResponseOptions({body: gpusJson}));
  //     mockBackend.connections.subscribe((connection: MockConnection) => {
  //       conn = connection;
  //     });
  //     gpus.getGpus().subscribe(jsonObject => {
  //       gpus.gpus = jsonObject;
  //     });
  //     conn.mockRespond(response);
  //     expect(gpus.gpus.length).toBe(3);
  //     mockBackend.verifyNoPendingRequests();
  //   }));
  // });

  // describe('gpus component rendering', () => {
  //   beforeEach(() => {
  //     GpusComponent.prototype.getGpus = function () {
  //       const response = new Response(new ResponseOptions({body: gpusJson}));
  //       return Observable.of(response).map(response => response.json());
  //     };
  //   });

  //   it('should mock the gpus and render 3 elements <gpu>', () => {
  //     const fixture = TestBed.createComponent(GpusComponent);
  //     fixture.detectChanges();
  //     const gpus = fixture.nativeElement;
  //     expect(gpus.querySelectorAll('lugbench-gpu').length).toBe(3);
  //   });
  // });
});
