import {Component} from '@angular/core';
import {TestBed, async} from '@angular/core/testing';
import {MainComponent} from './main';

@Component({selector: 'lugbench-techs', template: ''})
class MockTechsComponent {}
@Component({selector: 'lugbench-footer', template: ''})
class MockFooterComponent {}
@Component({selector: 'lugbench-header', template: ''})
class MockHeaderComponent {}
@Component({selector: 'lugbench-title', template: ''})
class MockTitleComponent {}

describe('Main Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainComponent,
        MockTechsComponent,
        MockFooterComponent,
        MockHeaderComponent,
        MockTitleComponent
      ]
    });
    TestBed.compileComponents();
  }));

  it('should render the header, title, techs and footer', () => {
    const fixture = TestBed.createComponent(MainComponent);
    fixture.detectChanges();
    const main = fixture.nativeElement;
    expect(main.querySelector('lugbench-header')).toBeDefined();
    expect(main.querySelector('lugbench-title')).toBeDefined();
    expect(main.querySelector('lugbench-techs')).toBeDefined();
    expect(main.querySelector('lugbench-footer')).toBeDefined();
  });
});
