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
        const headerTopMenu = createElement('p', 'header-text');
        headerTopMenu.textContent = 'Menu';
        const headerTopReviews = createElement('p', 'header-text');
        headerTopReviews.textContent = 'Reviews';
        const headerTopRegistrLog = createElement('p', 'header-text');
        headerTopRegistrLog.textContent = 'Login / Registration';
        const headerTopTel = createElement('p', 'header-text');
        headerTopTel.textContent = '+7 (495) 374 - 9233';

        const headerMain = createElement('div', 'header-main');
        headerMain.classList.add('header-main__wrapper');

        headerTopMain.append(headerTopMenu, headerTopReviews, headerTopRegistrLog);
        headerTop.append(headerTopLogo, headerTopMain, headerTopTel);
        header.append(headerTop, headerMain);
        return header;
    }
}
