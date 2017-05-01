import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {Http} from '@angular/http';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Gpu} from './gpus';

@Component({
  selector: 'lugbench-gpu',
  template: require('./gpu.html')
})

export class GpuComponent implements OnInit, OnDestroy {
  @Input() public gpu: Gpu;
  gpuId: string;

  constructor(public http: Http, public activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.gpuId = params.id;
      this.getGpu().subscribe(data => {
        this.gpu = data;
        return data;
      });
    });
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  getGpu(): Observable<Gpu> {
    return this.http
      .get(`http://localhost:5000/api/v1/gpu/${this.gpuId}`)
      .map(response => response.json().data);
  }
}
