import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { config } from '../config';

import { Scenario } from '../shared/models/scenario';

@Component({
    selector: 'scenarios-component',
    template: require('./scenarios.component.html')
})
export class ScenariosComponent {
    private scenarios: Scenario[];

    constructor(private http: Http, private router: Router) {
        this.getScenarios().subscribe(response => {
            this.scenarios = response;
        });
    }

    getScenarios(): Observable<Scenario[]> {
        return this.http
        .get(config.API_URL + '/scenarios')
        .map(response => response.json().data);
    }

    goToScenario(id: Number): void {
        this.router.navigateByUrl(`/scenarios/${id}`);
    }
}
