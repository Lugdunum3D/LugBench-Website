import {GpuComponent} from './gpu';
import {TestBed, async} from '@angular/core/testing';

describe('gpu component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GpuComponent
      ]
    });
    TestBed.compileComponents();
  }));

  it('should render Gulp', () => {
    const fixture = TestBed.createComponent(GpuComponent);
    fixture.componentInstance.gpu = {
      title: 'Gulp',
      logo: 'http://fountainjs.io/assets/imgs/gulp.png',
      text1: 'The streaming build system',
      text2: 'Automate and enhance your workflow',
      data: {},
      properties: {}
    };
    fixture.detectChanges();
    const gpu = fixture.nativeElement;
    expect(gpu.querySelector('h3').textContent.trim()).toBe('Gulp');
  });
});
