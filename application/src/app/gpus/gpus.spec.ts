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
    key: 'gulp',
    title: 'Gulp',
    logo: 'http://fountainjs.io/assets/imgs/gulp.png',
    text1: 'The streaming build system',
    text2: 'Automate and enhance your workflow'
  },
  {
    key: 'react',
    title: 'React',
    logo: 'http://fountainjs.io/assets/imgs/react.png',
    text1: 'A JavaScript library for building user interfaces',
    text2: 'A declarative, efficient, and flexible JavaScript library for building user interfaces'
  },
  {
    key: 'angular1',
    title: 'Angular 1',
    logo: 'http://fountainjs.io/assets/imgs/angular1.png',
    text1: 'HTML enhanced for web apps!',
    text2: 'AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.'
  }
];

describe('gpus component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GpusComponent,
        MockGpuComponent
      ],
      providers: [
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http, useFactory: (backend, defaultOptions) => new Http(backend, defaultOptions),
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });
    TestBed.compileComponents();
  }));

  describe('gpus component methods', () => {
    it('should get gpus', inject([MockBackend], (mockBackend: MockBackend) => {
      const fixture = TestBed.createComponent(GpusComponent);
      const gpus: GpusComponent = fixture.componentInstance;
      let conn: MockConnection;
      const response = new Response(new ResponseOptions({body: gpusJson}));
      mockBackend.connections.subscribe((connection: MockConnection) => {
        conn = connection;
      });
      gpus.getGpus().subscribe(jsonObject => {
        gpus.gpus = jsonObject;
      });
      conn.mockRespond(response);
      expect(gpus.gpus.length).toBe(3);
      mockBackend.verifyNoPendingRequests();
    }));
  });

  describe('gpus component rendering', () => {
    beforeEach(() => {
      GpusComponent.prototype.getGpus = function () {
        const response = new Response(new ResponseOptions({body: gpusJson}));
        return Observable.of(response).map(response => response.json());
      };
    });

    it('should mock the gpus and render 3 elements <gpu>', () => {
      const fixture = TestBed.createComponent(GpusComponent);
      fixture.detectChanges();
      const gpus = fixture.nativeElement;
      expect(gpus.querySelectorAll('lugbench-gpu').length).toBe(3);
    });
  });
});
