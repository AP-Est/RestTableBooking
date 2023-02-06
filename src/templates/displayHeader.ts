import createElement from '../Utils/createElement';
import createButton from '../Utils/createButton';

export function displayHeader() {
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

    const headerMain = createElement('div', 'header-main');
    headerMain.classList.add('header-main__wrapper');

    const booking = createElement('div', 'booking');
    const phone = createElement('div', 'booking-phone');
    const phoneRef = createElement('a', 'booking-phone__ref') as HTMLAnchorElement;
    phoneRef.classList.add('header-text');
    phoneRef.classList.add('link-tel');
    phoneRef.textContent = '+7 (495) 374 - 9233';
    phoneRef.href = 'tel:+7 (495) 374-9233';
    const address = createElement('div', 'booking-address');
    const addressImg = createElement('img', 'booking-img') as HTMLImageElement;
    addressImg.src = 'https://leclick.ru/img/icons/loc.svg';
    const addressSpan = createElement('span', 'booking-span');
    addressSpan.textContent = 'st. Rolling Scopes q3';
    const metro = createElement('div', 'booking-metro');
    const metroImg = createElement('img', 'booking-img') as HTMLImageElement;
    metroImg.src = 'https://leclick.ru/img/icons/metro.svg';
    const metroSpan = createElement('span', 'booking-span');
    metroSpan.textContent = 'Rsclone';
    const mainBooking = createElement('div', 'booking-main');
    const mainBookingBut = createButton('RESERVATION', 'button');

    mainBooking.append(mainBookingBut);
    metro.append(metroImg, metroSpan);
    address.append(addressImg, addressSpan);
    phone.append(phoneRef);
    booking.append(phone, address, metro, mainBooking);
    headerTopMain.append(headerTopMainPage, headerTopMenu, headerTopReviews, headerTopRegistrLog);
    headerTop.append(headerTopLogo, headerTopMain, headerTopTel);
    headerMain.append(booking);
    header.append(headerTop, headerMain);
    return header;
}
