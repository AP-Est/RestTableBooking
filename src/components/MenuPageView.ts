import createElement from '../Utils/createElement';
import getElement from '../Utils/getElement';
// import createHeader from '../templates/createHeader';
import Menu from '../Utils/menuObject';
import '../styles/styleMenuPage.scss';
import { displayHeader } from '../templates/displayHeader';
import { displayFooter } from '../templates/displayFooter';

export class MenuView {
    body: HTMLElement;
    header: HTMLElement;
    main: HTMLElement;
    wrapper: HTMLElement;
    container: HTMLElement;
    footer: HTMLElement;

    private menuCategories = ['STARTERS', 'ENTREE SALADS', 'SOUP & SALAD', 'HOUSE SALADS'];

    constructor() {
        this.body = getElement('body') as HTMLElement;
        this.body.innerHTML = '';

        this.header = displayHeader();
        this.main = createElement('main', 'main-menu');

        this.wrapper = createElement('div', 'wrapper');
        this.main.append(this.wrapper);

        this.container = createElement('div', 'container');
        this.wrapper.append(this.container);
        this.createMenu();
        this.footer = displayFooter();
        this.body.append(this.header, this.main, this.footer);
    }

    public createMenu() {
        this.menuCategories.forEach((category) => {
            const categoryBlock = createElement('div', 'menu-category');
            const categoryEl = createElement('h2', 'category');
            categoryEl.innerHTML = category;
            categoryBlock.append(categoryEl);
            Menu.filter((el) => el.category === category).forEach((menuEl) => {
                const menuItemBlock = createElement('div', 'menu-item');
                const title = createElement('h3', 'title');
                title.innerHTML = menuEl.name;
                menuItemBlock.append(title);

                const description = createElement('div', 'description');
                description.innerHTML = menuEl.description;
                menuItemBlock.append(description);

                const price = createElement('div', 'price');
                price.innerHTML = menuEl.price.toString();
                menuItemBlock.append(price);

                categoryBlock.append(menuItemBlock);
            });
            this.container.append(categoryBlock);
        });
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
}
