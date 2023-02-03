import getElement from '../Utils/getElement';
import createElement from '../Utils/createElement';
import '../styles/styleMainPage.scss';
import createHeader from '../templates/createHeader';

export class MainPageView {
    body: HTMLElement;
    header: HTMLElement;

    constructor() {
        this.body = getElement('body') as HTMLElement;
        this.body.innerHTML = '';

        this.header = this.displayHeader();
        this.body.append(this.header);
    }

    displayHeader() {
        const header = createElement('div', 'header');
        header.classList.add('header__wrapper');

        const headerTop = createElement('div', 'header-top');
        headerTop.classList.add('header-top__wrapper');
        const headerTopLogo = createElement('div', 'header-top-logo');
        const headerTopMain = createElement('div', 'header-top-main');
        const headerTopMenu = createElement('div', 'header-top-menu');
        const headerTopReviews = createElement('div', 'header-top-reviews');
        const headerTopTel = createElement('div', 'header-top-tel');

        const headerMain = createElement('div', 'header-main');
        headerMain.classList.add('header-main__wrapper');

        headerTopMain.append(headerTopMenu, headerTopReviews);
        headerTop.append(headerTopLogo, headerTopMenu, headerTopTel);
        header.append(headerTop, headerMain);
        return header;
    }
}
