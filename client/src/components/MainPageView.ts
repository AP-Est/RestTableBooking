import getElement from '../Utils/getElement';
import '../styles/styleMainPageHeaderFooter.scss';
import '../styles/styleMainPageMainPart.scss';
import '../styles/styleMainPageForm.scss';
import '../styles/styleSwitchTheme.scss';
import { displayHeaderReservation } from '../templates/displayHeaderReservation';
import { displayCarousel } from '../templates/displayCarousel';
import { displayFooter } from '../templates/displayFooter';
import { displayMainPageMain } from '../templates/displayMainPageMain';
import { displaySignUpLogIn } from '../templates/displaySignUp';
import createElement from '../Utils/createElement';
import { BaseView } from './BaseView';

export class MainPageView extends BaseView {
    //body: HTMLElement;

    constructor() {
        super();

        this.renderPage(false, false);
    }

    renderPage(moreMainInf: boolean, moreAdditInf: boolean) {
        this.body.innerHTML = '';
        this.mainContent.innerHTML = '';

        const main = displayMainPageMain(moreMainInf, moreAdditInf);
        //console.log('renderPage main', main);
        //console.log('renderPage this.mainContent', this.mainContent);

        this.mainContent.append(this.header, this.carousel, main, this.footer);
        this.formWrap.append(this.form);
        this.wrap.append(this.mainContent, this.formWrap);
        this.body.append(this.wrap);
        //console.log('renderPage this.body 2', this.body);
    }

    // bindClickMenu() {
    //     this.body.addEventListener('click', (event) => {
    //         const target = event.target as Element;
    //         if (target.classList.contains('header-menu')) {
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

    // bindClickSignupLogin() {
    //     this.body.addEventListener('click', (event) => {
    //         const target = event.target as Element;
    //         if (target.classList.contains('signup-login')) {
    //             window.location.hash = '';
    //             const form = document.querySelector('.form-wrap');
    //             //console.log('form', form);
    //             (form as HTMLElement).style.display = 'block';
    //             const main = document.querySelector('.main-content');
    //             //console.log('form', form);
    //             (main as HTMLElement).classList.add('main-content_passive');
    //         }
    //     });
    // }

    // bindClickExitFromSignupLogin() {
    //     const main = document.querySelector('.main-content') as HTMLElement;
    //     main.addEventListener('click', () => {
    //         const form = document.querySelector('.form-wrap');
    //         console.log('main-content');
    //         (form as HTMLElement).style.display = 'none';
    //         main.classList.remove('main-content_passive');
    //     });
    // }

    bindClickMoreMainInf(handler: () => void) {
        this.body.addEventListener('click', (event) => {
            const target = event.target as Element;
            if (
                target.classList.contains('more-main-inf') ||
                (target.parentElement as HTMLElement).classList.contains('more-main-inf')
            ) {
                //console.log('more-main-inf');
                handler();
            }
        });
    }

    bindClickMoreAdditInf(handler: () => void) {
        this.body.addEventListener('click', (event) => {
            const target = event.target as Element;
            if (
                target.classList.contains('more-addit-inf') ||
                (target.parentElement as HTMLElement).classList.contains('more-addit-inf')
            ) {
                //console.log('more-addit-inf');
                handler();
            }
        });
    }

    // bindClickLogIn() {
    //     this.body.addEventListener('click', (event) => {
    //         //console.log('bindClickLogIn event', event.target);
    //         const target = event.target as Element;
    //         if (target.classList.contains('login')) {
    //             console.log('log in');
    //             const logIn = document.querySelector('.tab-content > div:last-child');
    //             (logIn as HTMLElement).style.display = 'block';
    //             const signUp = document.querySelector('.tab-content > div:first-child');
    //             (signUp as HTMLElement).style.display = 'none';
    //             const logInButton = document.querySelector('.tab-buttons > li:last-child');
    //             const SignUpButton = document.querySelector('.tab-buttons > li:first-child');
    //             //console.log('logInButton', logInButton);
    //             (logInButton as HTMLElement).classList.add('active');
    //             (SignUpButton as HTMLElement).classList.remove('active');
    //         }
    //     });
    // }

    // bindClickSignUp() {
    //     this.body.addEventListener('click', (event) => {
    //         //console.log('bindClickLogIn event', event.target);
    //         const target = event.target as Element;
    //         if (target.classList.contains('signup')) {
    //             console.log('sign up');
    //             const signUp = document.querySelector('.tab-content > div:first-child');
    //             (signUp as HTMLElement).style.display = 'block';
    //             const logIn = document.querySelector('.tab-content > div:last-child');
    //             (logIn as HTMLElement).style.display = 'none';
    //             const logInButton = document.querySelector('.tab-buttons > li:last-child');
    //             const SignUpButton = document.querySelector('.tab-buttons > li:first-child');
    //             (logInButton as HTMLElement).classList.remove('active');
    //             (SignUpButton as HTMLElement).classList.add('active');
    //         }
    //     });
    // }

    // changeTheme() {
    //     this.body.addEventListener('click', (event) => {
    //         const target = event.target as Element;
    //         console.log('changeTheme2 target', target);
    //         if (target.classList.contains('header-switch')) {
    //             console.log('changeTheme2 dark');
    //             document.body.classList.toggle('dark');
    //         }
    //     });
    // }
}
