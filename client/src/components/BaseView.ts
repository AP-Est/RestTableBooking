import '../styles/styleSwitchTheme.scss';
import '../styles/styleMainPageHeaderFooter.scss';
import '../styles/styleMainPageForm.scss';
import { displayHeaderReservation } from '../templates/displayHeaderReservation';
import { displayCarousel } from '../templates/displayCarousel';
import { displayFooter } from '../templates/displayFooter';
import { displaySignUpLogIn } from '../templates/displaySignUp';
import getElement from '../Utils/getElement';
import createElement from '../Utils/createElement';

export class BaseView {
    header: HTMLElement;
    carousel: HTMLElement;
    footer: HTMLElement;
    body: HTMLElement;
    wrap: HTMLElement;
    mainContent: HTMLElement;
    formWrap: HTMLElement;
    form: HTMLElement;

    constructor() {
        this.body = getElement('body') as HTMLElement;
        this.body.innerHTML = '';
        //console.log('BaseView this.body', this.body);

        this.wrap = createElement('div', 'wrap');
        this.mainContent = createElement('div', 'main-content');
        this.formWrap = createElement('div', 'form-wrap');

        this.form = displaySignUpLogIn();
        this.header = displayHeaderReservation();
        this.carousel = displayCarousel();
        this.footer = displayFooter();

        // this.mainContent.append(this.header, this.carousel, this.footer);
        // this.formWrap.append(this.form);
        // this.wrap.append(this.mainContent, this.formWrap);
        // this.body.append(this.wrap);
    }

    bindClickMenu() {
        this.body.addEventListener('click', (event) => {
            const target = event.target as Element;
            //console.log('BaseView bindClickMenu');
            if (target.classList.contains('header-menu')) {
                //console.log('BaseView bindClickMenu target', target);
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

    bindClickSignupLogin() {
        this.body.addEventListener('click', (event) => {
            const target = event.target as Element;
            if (target.classList.contains('signup-login')) {
                //window.location.hash = '';
                const form = document.querySelector('.form-wrap');
                //console.log('form', form);
                //console.log('bindClickSignupLogin');
                (form as HTMLElement).style.display = 'block';
                const main = document.querySelector('.main-content');
                //console.log('form', form);
                (main as HTMLElement).classList.add('main-content_passive');
            }
        });
    }

    bindClickExitFromSignupLogin() {
        // const main = document.querySelector('.main-content') as HTMLElement;
        // if (main) {
        //     console.log('bindClickExitFromSignupLogin main', main);
        //     main.addEventListener('click', () => {
        //         const form = document.querySelector('.form-wrap');
        //         //console.log('bindClickExitFromSignupLogin');
        //         (form as HTMLElement).style.display = 'none';
        //         main.classList.remove('main-content_passive');
        //     });
        // }
        this.body.addEventListener('click', (event) => {
            const target = event.target as Element;
            //console.log('bindClickExitFromSignupLogin target', target);
            if (target.closest('.main-content') && !target.classList.contains('signup-login')) {
                const form = document.querySelector('.form-wrap');
                //console.log('bindClickExitFromSignupLogin');
                (form as HTMLElement).style.display = 'none';
                const main = document.querySelector('.main-content') as HTMLElement;
                main.classList.remove('main-content_passive');
            }
        });
    }

    bindClickLogIn() {
        this.body.addEventListener('click', (event) => {
            //console.log('bindClickLogIn event', event.target);
            const target = event.target as Element;
            if (target.classList.contains('login')) {
                //console.log('log in');
                const logIn = document.querySelector('.tab-content > div:last-child');
                (logIn as HTMLElement).style.display = 'block';
                const signUp = document.querySelector('.tab-content > div:first-child');
                (signUp as HTMLElement).style.display = 'none';
                const logInButton = document.querySelector('.tab-buttons > li:last-child');
                const SignUpButton = document.querySelector('.tab-buttons > li:first-child');
                //console.log('logInButton', logInButton);
                (logInButton as HTMLElement).classList.add('active');
                (SignUpButton as HTMLElement).classList.remove('active');
            }
        });
    }

    bindClickSignUp() {
        this.body.addEventListener('click', (event) => {
            //console.log('bindClickLogIn event', event.target);
            const target = event.target as Element;
            if (target.classList.contains('signup')) {
                //console.log('sign up');
                const signUp = document.querySelector('.tab-content > div:first-child');
                (signUp as HTMLElement).style.display = 'block';
                const logIn = document.querySelector('.tab-content > div:last-child');
                (logIn as HTMLElement).style.display = 'none';
                const logInButton = document.querySelector('.tab-buttons > li:last-child');
                const SignUpButton = document.querySelector('.tab-buttons > li:first-child');
                (logInButton as HTMLElement).classList.remove('active');
                (SignUpButton as HTMLElement).classList.add('active');
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

    // changeTheme() {
    //     const body: Element = <Element>document.querySelector('body');
    //     body.addEventListener('click', (event) => {
    //         const target = event.target as Element;
    //         console.log('changeTheme target', target);
    //         if (target.classList.contains('header-switch__slider')) {
    //             console.log('changeTheme dark');
    //             //const body: Element = <Element>document.querySelector('body');
    //             body.classList.toggle('dark');
    //         }
    //     });
    // }
}
