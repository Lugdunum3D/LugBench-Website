import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

export class Gpu {
  constructor(
    public logo: string,
    public title: string,
    public text1: string,
    public text2: string
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
    this.getGpus().subscribe(result => {
      console.log('RESULT ', result);
      this.gpus = result;
    });
  }

  getGpus(): Observable<Gpu[]> {
    return this.http
      .get('http://localhost:5000/api/v1/gpus')
      // .get('app/gpus/gpus.json')
      .map(response => {
        console.log('RESPONSE ', response);
        return response.json();
      });
  }
}
