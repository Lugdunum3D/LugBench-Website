import { Component } from '@angular/core';

@Component({
    selector: 'lugbench-header',
    template: require('./header.component.html'),
})
export class HeaderComponent {
    public openSearchInput(): void {
        (<HTMLElement>document.querySelector('.header-input-wrapper')).style.display = 'block';
        (<HTMLElement>document.querySelector('.overlay-wrapper')).style.display = 'block';
    }

    public discard(): void {
        let el = (<HTMLElement>document.querySelector('.side-nav-wrapper'));

        (<HTMLElement>document.querySelector('.header-input-wrapper')).style.display = 'none';
        (<HTMLElement>document.querySelector('.overlay-wrapper')).style.display = 'none';

        if (el) {
            el.classList.add('on-closing');
            setTimeout(_ => {
                console.log('test');
                el.classList.remove('open');
                el.classList.remove('on-closing');
                el.classList.add('closed');
            }, 500);
        }
    }

    public openSideBar(): void {
        let el = (<HTMLElement>document.querySelector('.side-nav-wrapper'));

        (<HTMLElement>document.querySelector('.overlay-wrapper')).style.display = 'block';
        el.classList.add('on-opening');
        setTimeout(_ => {
            el.classList.remove('closed');
            el.classList.remove('on-opening');
            el.classList.add('open');
        }, 500);
    }
}
