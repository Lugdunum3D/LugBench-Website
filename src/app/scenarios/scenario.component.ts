import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import { Scenario } from '../shared/models/scenario';

import { config } from '../config';

@Component({
    selector: 'scenario-component',
    template: require('./scenario.component.html')
})
export class ScenarioComponent {
    private scenario: Scenario;

    constructor(private http: Http) {
        this.getScenario().subscribe(response => {
            console.log(response);
        });
    }

    getScenario(): Observable<Scenario> {
        return this.http.get(config.API_URL + '/scenarios').map(response => response.json());
    }
}
