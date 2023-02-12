import createElement from '../Utils/createElement';
import getElement from '../Utils/getElement';
// import createHeader from '../templates/createHeader';
import '../styles/styleReviewsPage.scss';
import { displayHeader } from '../templates/displayHeader';
import { displayFooter } from '../templates/displayFooter';
import { ServiceReviews } from './../Utils/reviews.service';

export class ReviewsView {
    body: HTMLElement;
    header: HTMLElement;
    main: HTMLElement;
    wrapper: HTMLElement;
    container: HTMLElement;
    footer: HTMLElement;

    public service = new ServiceReviews();

    constructor() {
        this.body = getElement('body') as HTMLElement;
        this.body.innerHTML = '';

        this.header = displayHeader();
        this.main = createElement('main', 'main-reviews');

        this.wrapper = createElement('div', 'wrapper');
        this.main.append(this.wrapper);

        this.container = createElement('div', 'container');
        this.wrapper.append(this.container);
        this.createReviews();
        this.footer = displayFooter();
        this.body.append(this.header, this.main, this.footer);
    }

    public async createReviews(): Promise<void> {
        const review = await this.service.getReviews();
        console.log(review);
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

    bindClickReviews() {
        this.body.addEventListener('click', (event) => {
            const target = event.target as Element;
            if (target.classList.contains('link-reviews-page')) {
                window.location.hash = `reviews`;
            }
        });
    }
}
