import createElement from '../Utils/createElement';
import Menu from '../Utils/menuObject';
import '../styles/styleMenuPage.scss';
import { BaseView } from './BaseView';

export class MenuView extends BaseView {
    mainMenu!: HTMLElement;
    wrapper!: HTMLElement;
    container!: HTMLElement;

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
}
