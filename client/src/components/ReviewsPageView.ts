import createElement from '../Utils/createElement';
import '../styles/styleReviewsPage.scss';
import { ServiceReviews } from './../Utils/reviews.service';
import { Reviews } from './../Utils/reviews.interface';
import { BaseView } from './BaseView';

export class ReviewsView extends BaseView {
    mainReviews: HTMLElement;
    wrapper: HTMLElement;
    carouselInner: HTMLElement;

    public service = new ServiceReviews();
    public carouselBlock: HTMLElement = <HTMLElement>createElement('div', 'carousel', 'slide');

    constructor() {
        super();
        this.main.innerHTML = '';
        this.mainReviews = createElement('main', 'main-reviews');

        this.wrapper = createElement('div', 'wrapper-reviews');
        this.mainReviews.append(this.wrapper);

        const title: HTMLElement = <HTMLElement>createElement('h2', 'reviews-title');
        title.innerHTML = 'WHAT OUR VISITORS SAY ABOUT US';
        this.wrapper.append(title);

        this.wrapper.append(this.carouselBlock);
        this.carouselInner = createElement('div', 'carousel-inner');
        this.carouselBlock.append(this.carouselInner);
        this.createReviews();

        this.main.append(this.mainReviews);
    }

    public async createReviews(): Promise<void> {
        const reviews = await this.service.getReviews();

        reviews.forEach((review: Reviews, index: number) => {
            const carouselItem = createElement('div', 'carousel-item');
            const reviewItemBlock = createElement('div', 'review-item');
            if (index === 0) {
                carouselItem.classList.add('active');
            }

            const subtitle = createElement('h3', 'subtitle');
            subtitle.innerHTML = review.username;
            this.carouselInner.append(carouselItem);
            carouselItem.append(reviewItemBlock);
            reviewItemBlock.append(subtitle);

            const description = createElement('div', 'description');
            description.innerHTML = review.comment;
            reviewItemBlock.append(description);
        });
        this.carouselBlock.setAttribute('id', 'carouselControler');
        this.carouselBlock.setAttribute('data-bs-ride', 'carousel');
        const blockCarouselButtons: HTMLButtonElement = <HTMLButtonElement>createElement('div', 'carousel-buttons');
        this.carouselBlock.append(blockCarouselButtons);

        const buttonPrev: HTMLButtonElement = <HTMLButtonElement>createElement('button', 'button-prev');
        buttonPrev.setAttribute('data-bs-target', '#carouselControler');
        buttonPrev.setAttribute('data-bs-slide', 'prev');

        const buttonNext: HTMLButtonElement = <HTMLButtonElement>createElement('button', 'button-next');
        buttonNext.setAttribute('data-bs-target', '#carouselControler');
        buttonNext.setAttribute('data-bs-slide', 'next');

        buttonPrev.innerHTML = '<';
        buttonNext.innerHTML = '>';
        blockCarouselButtons.append(buttonPrev, buttonNext);

        const reviewButton: HTMLButtonElement = <HTMLButtonElement>createElement('button', 'review-button');
        reviewButton.innerText = 'Add a review';
        this.wrapper.append(reviewButton);
        this.addReview(reviewButton);
    }

    private addReview(reviewButton: HTMLButtonElement) {
        reviewButton.addEventListener('click', () => {
            this.showPopup();
        });
    }

    private showPopup() {
        const popupBackground: HTMLElement = <HTMLElement>createElement('div', 'popup-background');
        this.body.append(popupBackground);
        const popup: HTMLElement = <HTMLElement>createElement('div', 'popup');
        popupBackground.append(popup);
        const popupContent: HTMLElement = <HTMLElement>createElement('div', 'popup-content');
        popup.append(popupContent);
        const popupTitle: HTMLElement = <HTMLElement>createElement('div', 'popup-title');
        popupContent.append(popupTitle);
        popupTitle.innerHTML = 'LEAVE A FEEDBACK, IT IS VERY IMPORTANT FOR US';
        const nameInput: HTMLInputElement = <HTMLInputElement>createElement('input', 'name-input');
        popupContent.append(nameInput);
        nameInput.setAttribute('placeholder', 'ENTER YOUR NAME');
        const commentInput: HTMLTextAreaElement = <HTMLTextAreaElement>createElement('textarea', 'comment-input');
        popupContent.append(commentInput);
        commentInput.setAttribute('placeholder', 'LEAVE YOUR FEEDBACK');
        const sendButton: HTMLButtonElement = <HTMLButtonElement>createElement('button', 'send-button');
        popupContent.append(sendButton);
        sendButton.innerText = 'Send';
        sendButton.setAttribute('type', 'submit');

        popupBackground.addEventListener('click', (event) => {
            const target = event.target as Element;
            if (target.classList.contains('popup-background')) {
                popupBackground.style.display = 'none';
                popup.style.display = 'none';
                popupContent.style.display = 'none';
            }
        });

        sendButton.addEventListener('click', () => {
            const reviewObject: Reviews = {
                username: nameInput.value,
                comment: commentInput.value,
            };
            this.service.createNewReview(reviewObject);
            popup.style.display = 'none';
            popupBackground.innerHTML = 'Your review has been sent, thanks!';
            popupBackground.style.fontSize = '40px';
            popupBackground.style.color = 'white';
            popupBackground.style.textShadow = '2px 2px 8px #f4c430';
            popupBackground.style.padding = '250px 30%';
            popupBackground.style.textAlign = 'center';
            setTimeout(function () {
                location.reload();
            }, 3000);
        });
    }
}
