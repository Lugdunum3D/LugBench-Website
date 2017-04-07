import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

export class Gpu {
  constructor(
    public logo: string,
    public title: string,
    public text1: string,
    public text2: string,
    public data: any,
    public properties: any
  ) {}
}

@Component({
  selector: 'lugbench-gpus',
  template: require('./gpus.html')
})

export class GpusComponent {
  public gpus: Gpu[];
  public gpu: Gpu;

  constructor(public http: Http) {
    this.getGpus().subscribe(data => {
      this.gpus = data;
    });
  }

  getGpus(): Observable<Gpu[]> {
    return this.http
      .get('http://localhost:5000/api/v1/gpus')
      .map(response => response.json());
  }

}
