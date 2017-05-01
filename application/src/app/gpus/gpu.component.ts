import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';
import { Gpu } from '../shared/models/gpu';

@Component({
  selector: 'lugbench-gpus',
  template: require('./gpu.component.html')
})
export class GpuComponent {
  public gpu: Gpu;

  constructor(public http: Http, public route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.getGpu(params.id).subscribe(data => {
        this.gpu = data;
      });
    });
  }

  getGpu(id: string): Observable<Gpu> {
    return this.http
      .get(`http://localhost:5000/api/v1/gpus/${id}`)
      .map(response => response.json().data);
  }
}
