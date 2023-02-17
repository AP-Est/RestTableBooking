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
    headerTopMenu.classList.add('header-menu');
    headerTopMenu.textContent = 'Menu';
    const headerTopReviews = createElement('p', 'header-text');
    headerTopReviews.classList.add('header-main-text');
    headerTopReviews.classList.add('link-reviews-page');
    headerTopReviews.textContent = 'Reviews';
    const headerTopRegistrLog = createElement('p', 'header-text');
    headerTopRegistrLog.classList.add('header-main-text');
    headerTopRegistrLog.classList.add('signup-login');
    headerTopRegistrLog.textContent = 'SignUp / LogIn';
    const headerTopTel = createElement('a', 'header-text') as HTMLAnchorElement;
    headerTopTel.classList.add('link-tel');
    headerTopTel.textContent = '+(375) 25 - 374 - 9233';
    headerTopTel.href = 'tel:+(375) 25 - 374-9233';

    const headerSwitch = createElement('label', 'header-switch');
    const headerSwitchInput = createElement('input', 'header-switch__input');
    const headerSwitchSlider = createElement('span', 'header-switch__slider');
    headerSwitchInput.setAttribute('type', 'checkbox');

    headerTopMain.append(headerTopMainPage, headerTopMenu, headerTopReviews, headerTopRegistrLog);
    headerSwitch.append(headerSwitchInput, headerSwitchSlider);
    headerTop.append(headerTopLogo, headerTopMain, headerTopTel, headerSwitch);
    header.append(headerTop);
    return header;
}
