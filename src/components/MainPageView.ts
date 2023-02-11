import getElement from '../Utils/getElement';
import createElement from '../Utils/createElement';
import createButton from '../Utils/createButton';
import '../styles/styleMainPageHeaderFooter.scss';
import '../styles/styleMainPageMainPart.scss';
import { displayHeader } from '../templates/displayHeader';
import { displayFooter } from '../templates/displayFooter';
import { displayMainPageMain } from '../templates/displayMainPageMain';

export class MainPageView {
    body: HTMLElement;
    // header: HTMLElement;
    // main: HTMLElement;
    // footer: HTMLElement;

    constructor() {
        this.body = getElement('body') as HTMLElement;
        this.body.innerHTML = '';

        // this.header = displayHeader();
        // this.main = displayMainPageMain();
        // this.footer = displayFooter();
        // this.body.append(this.header, this.main, this.footer);
        this.renderPage(false, false);
    }

    renderPage(moreMainInf: boolean, moreAdditInf: boolean) {
        this.body.innerHTML = '';
        const header = displayHeader();
        const main = displayMainPageMain(moreMainInf, moreAdditInf);
        const footer = displayFooter();
        this.body.append(header, main, footer);
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

    bindClickMainPage() {
        this.body.addEventListener('click', (event) => {
            const target = event.target as Element;
            if (target.classList.contains('link-main-page')) {
                window.location.hash = '';
            }
        });
    }

    bindClickMoreMainInf(handler: () => void) {
        this.body.addEventListener('click', (event) => {
            const target = event.target as Element;
            if (
                target.classList.contains('more-main-inf') ||
                (target.parentElement as HTMLElement).classList.contains('more-main-inf')
            ) {
                console.log('more-main-inf');
                handler();
            }
        });
    }

    bindClickMoreAdditInf(handler: () => void) {
        this.body.addEventListener('click', (event) => {
            const target = event.target as Element;
            if (
                target.classList.contains('more-addit-inf') ||
                (target.parentElement as HTMLElement).classList.contains('more-addit-inf')
            ) {
                console.log('more-addit-inf');
                handler();
            }
        });
    }
}
