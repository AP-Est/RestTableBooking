import createElement from '../Utils/createElement';
import Menu from '../Utils/menuObject';
import '../styles/styleMenuPage.scss';
import { BaseView } from './BaseView';

export class MenuView extends BaseView {
    // body: HTMLElement;
    // header: HTMLElement;
    mainMenu!: HTMLElement;
    wrapper!: HTMLElement;
    container!: HTMLElement;
    //footer: HTMLElement;

    private menuCategories = ['STARTERS', 'ENTREE SALADS', 'SOUP & SALAD', 'HOUSE SALADS'];

    constructor() {
        super();

        this.main.innerHTML = '';
        this.mainMenu = createElement('main', 'main-menu');

        this.wrapper = createElement('div', 'wrapper');

        this.container = createElement('div', 'container');
        this.wrapper.append(this.container);
        this.createMenu();

        this.mainMenu.append(this.wrapper);
        this.main.append(this.mainMenu);
    }

    // createMenuPage() {
    //     this.main.innerHTML = '';
    //     this.mainMenu = createElement('main', 'main-menu');

    //     this.wrapper = createElement('div', 'wrapper');

    //     this.container = createElement('div', 'container');
    //     this.wrapper.append(this.container);
    //     this.createMenu();

    //     this.mainMenu.append(this.wrapper);
    //     this.main.append(this.mainMenu);
    // }

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

    // bindClickMenu() {
    //     this.body.addEventListener('click', (event) => {
    //         const target = event.target as Element;
    //         if (target.classList.contains('header-main-text')) {
    //             window.location.hash = `menu`;
    //         }
    //     });
    // }

    // bindClickButtonReserv() {
    //     this.body.addEventListener('click', (event) => {
    //         const target = event.target as Element;
    //         const parent = target.parentElement as Element;
    //         if (target.classList.contains('booking-main') || parent.classList.contains('booking-main')) {
    //             window.location.hash = `reservation`;
    //         }
    //     });
    // }

    // bindClickMainPage() {
    //     this.body.addEventListener('click', (event) => {
    //         const target = event.target as Element;
    //         if (target.classList.contains('link-main-page')) {
    //             window.location.hash = '';
    //         }
    //     });
    // }

    // bindClickReviews() {
    //     this.body.addEventListener('click', (event) => {
    //         const target = event.target as Element;
    //         if (target.classList.contains('link-reviews-page')) {
    //             window.location.hash = `reviews`;
    //         }
    //     });
    // }
}
