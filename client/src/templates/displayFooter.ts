import createElement from '../Utils/createElement';

export function displayFooter() {
    const footer = createElement('footer', 'footer');
    const footerWrap = createElement('div', 'footer-wrap');

    const links = createElement('ul', 'links');
    const creatorOne = createElement('li', 'links__creator');
    creatorOne.classList.add('header-text');
    const creatorOneLink = createElement('a', 'links__creator-link') as HTMLAnchorElement;
    creatorOneLink.href = 'https://github.com/natalliasnv';
    creatorOneLink.textContent = 'Natallia Siniak';
    const creatorTwo = createElement('li', 'links__creator');
    creatorTwo.classList.add('header-text');
    const creatorTwoLink = createElement('a', 'links__creator-link') as HTMLAnchorElement;
    creatorTwoLink.href = 'https://github.com/AP-Est';
    creatorTwoLink.textContent = 'Andrey Piarouski';
    const creatorThree = createElement('li', 'links__creator');
    creatorThree.classList.add('header-text');
    const creatorThreeLink = createElement('a', 'links__creator-link') as HTMLAnchorElement;
    creatorThreeLink.href = 'https://github.com/viktoridanilova';
    creatorThreeLink.textContent = 'Viktoria Danilova';

    const logo = createElement('div', 'logo');
    const logoLink = createElement('a', 'logo__link') as HTMLAnchorElement;
    logoLink.href = 'https://rs.school/js/';
    const logoImg = createElement('img', 'logo__img') as HTMLImageElement;
    logoImg.src = 'https://rs.school/images/rs_school_js.svg';
    const spanYear = createElement('span', 'header-text');
    spanYear.textContent = '2023';

    logoLink.append(logoImg);
    logo.append(logoLink, spanYear);
    creatorThree.append(creatorThreeLink);
    creatorTwo.append(creatorTwoLink);
    creatorOne.append(creatorOneLink);
    links.append(creatorOne, creatorTwo, creatorThree);
    footerWrap.append(links, logo);
    footer.append(footerWrap);

    return footer;
}
