import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';

export class Gpu {
  constructor(
    public extensions: Array<Object>,
    public features: Object,
    public formats: Array<Array<Object>>,
    public memory: Object,
    public properties: Object,
    public queues: Array<Object>,
  ) {}
}

@Component({
  selector: 'lugbench-gpus',
  template: require('./gpus.html')
})

export class GpusComponent {
  public gpus: Gpu[];
  public gpu: Gpu;

  constructor(public http: Http, public router: Router) {
    this.getGpus().subscribe(data => {
      this.gpus = data;
      return data;
    });
  }

  getGpus(): Observable<Gpu[]> {
    return this.http
      .get('http://localhost:5000/api/v1/gpus')
      .map(response => response.json().data);
  }

  public goToGpu(id: string) {
    this.router.navigateByUrl(`/gpus/${id}`);
  }

}
