import createElement from '../Utils/createElement';

export function displayHeaderReservation() {
    const header = createElement('header', 'header');
    header.classList.add('header__wrapper');

    const headerTop = createElement('div', 'header-top');
    headerTop.classList.add('header-top__wrapper');
    const headerTopLogo = createElement('a', 'header-top-logo') as HTMLAnchorElement;
    headerTopLogo.href = './';
    const headerTopMain = createElement('div', 'header-top-main');
    const headerTopMainPage = createElement('p', 'header-text');
    headerTopMainPage.classList.add('header-main-text');
    headerTopMainPage.classList.add('link-main-page');
    headerTopMainPage.textContent = 'Main';
    const headerTopMenu = createElement('p', 'header-text');
    headerTopMenu.classList.add('header-main-text');
    headerTopMenu.textContent = 'Menu';
    const headerTopReviews = createElement('p', 'header-text');
    headerTopReviews.classList.add('header-main-text');
    headerTopReviews.textContent = 'Reviews';
    const headerTopRegistrLog = createElement('p', 'header-text');
    headerTopRegistrLog.classList.add('header-main-text');
    headerTopRegistrLog.textContent = 'Login / Registration';
    const headerTopTel = createElement('a', 'header-text') as HTMLAnchorElement;
    headerTopTel.classList.add('link-tel');
    headerTopTel.textContent = '+7 (495) 374 - 9233';
    headerTopTel.href = 'tel:+7 (495) 374-9233';

    headerTopMain.append(headerTopMainPage, headerTopMenu, headerTopReviews, headerTopRegistrLog);
    headerTop.append(headerTopLogo, headerTopMain, headerTopTel);
    header.append(headerTop);
    return header;
}
