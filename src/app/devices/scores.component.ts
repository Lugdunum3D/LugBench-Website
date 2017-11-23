import { Component, Pipe, PipeTransform } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

import { config } from '../config';

import { Score } from '../shared/models/score';

@Component({
    selector: 'scores-component',
    template: require('./scores.component.html')
})
export class ScoresComponent {
    private scores: Score[];
    private max;

    constructor(private http: Http, private activatedRoute: ActivatedRoute) {
        let id = this.activatedRoute.params['value'].id;
        this.getScores(id).subscribe(response => {
            this.scores = response;
            this.max = this.scores[0].averageFps;
            for (let i = 0; i < this.scores.length; i++) {
                if (this.scores[i].averageFps > this.max) {
                    this.max = this.scores[i].averageFps;
                }
            }
        });
    }

    getScores(id: number): Observable<Score[]> {
        return this.http.get(config.API_URL + '/scores?device=' + id).map(response => response.json().data);
    }
}

@Pipe({name: 'round'})
export class RoundPipe implements PipeTransform {
    transform(value: number): number {
        return Math.round(value);
    }
}
