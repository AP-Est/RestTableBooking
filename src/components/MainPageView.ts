import getElement from '../Utils/getElement';
import createElement from '../Utils/createElement';
import createButton from '../Utils/createButton';
import '../styles/styleMainPageHeaderFooter.scss';
import '../styles/styleMainPageMainPart.scss';
import { displayHeader } from '../templates/displayHeader';
import { displayFooter } from '../templates/displayFooter';

export class MainPageView {
    body: HTMLElement;
    header: HTMLElement;
    main: HTMLElement;
    footer: HTMLElement;

    constructor() {
        this.body = getElement('body') as HTMLElement;
        this.body.innerHTML = '';

        this.header = displayHeader();
        this.main = this.displayMain();
        this.footer = displayFooter();
        this.body.append(this.header, this.main, this.footer);
    }

    displayMain() {
        const main = createElement('main', 'main');

        return main;
    }

    bindClickMenu() {
        this.body.addEventListener('click', (event) => {
            const target = event.target as Element;
            if (target.classList.contains('header-main-text')) {
                window.location.hash = `menu`;
            }
        });
    }

    bindClickButtonReserv() {
        this.body.addEventListener('click', (event) => {
            const target = event.target as Element;
            const parent = target.parentElement as Element;
            if (target.classList.contains('booking-main') || parent.classList.contains('booking-main')) {
                window.location.hash = `reservation`;
            }
        });
    }
}
