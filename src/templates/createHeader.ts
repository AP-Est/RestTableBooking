import createElement from '../Utils/createElement';

export default function createHeader() {
    const header = createElement('div', 'header__wrapper');
    const links = createHeaderLinks();
    header.append(links);
    return header;
}

function createHeaderLinks() {
    const wrapper = createElement('div', 'header__links_wrapper');
    const linkToMain = createElement('span', 'header__links_main');
    linkToMain.innerText = 'Main';
    linkToMain.addEventListener('click', () => (window.location.hash = 'main/'));
    const linkToReservation = createElement('div', 'header__links_main');
    linkToReservation.innerText = 'Reservation';
    linkToReservation.addEventListener('click', () => (window.location.hash = 'reservation/'));
    const linkToMenu = createElement('div', 'header__links_main');
    linkToMenu.innerText = 'Menu';
    linkToMenu.addEventListener('click', () => (window.location.hash = 'menu/'));
    wrapper.append(linkToMain, linkToReservation, linkToMenu);
    return wrapper;
}
