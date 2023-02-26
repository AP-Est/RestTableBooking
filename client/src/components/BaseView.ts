import '../styles/styleSwitchTheme.scss';
import '../styles/styleMainPageHeaderFooter.scss';
import '../styles/styleMainPageForm.scss';
import { displayHeader } from '../templates/displayHeader';
import { displayCarousel } from '../templates/displayCarousel';
import { displayFooter } from '../templates/displayFooter';
import { displaySignUpLogIn } from '../templates/displaySignUpLogIn';
import { signUpLogInEnable } from '../templates/signUpLogInEnable';
import { signUpLogInDisable } from '../templates/signUpLogInDisable';
import { displayLogIn } from '../templates/displayLogIn';
import getElement from '../Utils/getElement';
import createElement from '../Utils/createElement';
import { IRegisteredUser, ISignIn, stateHeader } from '../types/types';

export class BaseView {
    header!: HTMLElement;
    carousel!: HTMLElement;
    footer!: HTMLElement;
    body: HTMLElement;
    wrap!: HTMLElement;
    mainContent!: HTMLElement;
    formWrap!: HTMLElement;
    form!: HTMLElement;
    main!: HTMLElement;

    constructor() {
        this.body = getElement('body') as HTMLElement;
        // this.body.innerHTML = '';
        // //console.log('BaseView this.body', this.body);

        // this.wrap = createElement('div', 'wrap');
        // this.mainContent = createElement('div', 'main-content');
        // this.formWrap = createElement('div', 'form-wrap');

        // this.form = displaySignUpLogIn();
        // this.header = displayHeader();
        // this.carousel = displayCarousel();
        // this.footer = displayFooter();

        // // this.mainContent.append(this.header, this.carousel, this.footer);
        // // this.formWrap.append(this.form);
        // // this.wrap.append(this.mainContent, this.formWrap);
        // // this.body.append(this.wrap);

        this.renderBasePage(stateHeader.signOutOk);
    }

    renderBasePage(state: string) {
        this.body.innerHTML = '';
        console.log('renderBasePage state', state);

        this.wrap = createElement('div', 'wrap');
        this.mainContent = createElement('div', 'main-content');
        this.formWrap = createElement('div', 'form-wrap');

        this.form = displaySignUpLogIn();
        this.header = displayHeader(state);
        if (!this.main) {
            this.main = createElement('main');
        }
        this.carousel = displayCarousel();
        this.footer = displayFooter();

        window.location.hash.split('/')[0] == '#reservation'
            ? this.mainContent.append(this.header, this.main, this.footer)
            : this.mainContent.append(this.header, this.carousel, this.main, this.footer);
        this.formWrap.append(this.form);
        this.wrap.append(this.mainContent, this.formWrap);
        this.body.append(this.wrap);

        if (state === 'signUpEmailAlreadyUse') {
            signUpLogInEnable();
            const div = createElement('div', 'field-wrap');
            div.classList.add('field-wrap-last');
            const p1 = createElement('p', 'error-text');
            p1.textContent = 'Email is already in use! ';
            const p2 = createElement('p', 'error-text');
            p2.textContent = 'Please, enter another email';

            const fieldBeforeError = document.querySelector('.field-before-error');
            console.log('fieldBeforeError', fieldBeforeError);

            div.append(p1, p2);
            fieldBeforeError?.after(div);
        }
        if (state === 'signUpError') {
            signUpLogInEnable();
            const div = createElement('div', 'field-wrap');
            div.classList.add('field-wrap-last');
            const p1 = createElement('p', 'error-text');
            p1.textContent = 'Error! ';
            const p2 = createElement('p', 'error-text');
            p2.textContent = 'Please, try again';

            const fieldBeforeError = document.querySelector('.field-before-error');
            console.log('fieldBeforeError', fieldBeforeError);

            div.append(p1, p2);
            fieldBeforeError?.after(div);
        }
        if (state === 'signUpOk') {
            signUpLogInEnable();
            const div = createElement('div', 'field-wrap');
            div.classList.add('field-wrap-last');
            const p1 = createElement('p', 'error-text');
            p1.textContent = 'You are registered! ';

            const fieldBeforeError = document.querySelector('.field-before-error');
            console.log('fieldBeforeError', fieldBeforeError);

            div.append(p1);
            fieldBeforeError?.after(div);
        }
        if (state === 'signInUserNotFound') {
            signUpLogInEnable();
            displayLogIn();
            const div = createElement('div', 'field-wrap');
            div.classList.add('field-wrap-last');
            const p1 = createElement('p', 'error-text');
            p1.textContent = 'User not found!';
            const p2 = createElement('p', 'error-text');
            p2.textContent = 'Please, try again';

            const fieldBeforeError = document.querySelector('.field-before-error-login');
            console.log('fieldBeforeError', fieldBeforeError);

            div.append(p1, p2);
            fieldBeforeError?.after(div);
        }
        if (state === 'signInInvalidPassword') {
            signUpLogInEnable();
            displayLogIn();
            const div = createElement('div', 'field-wrap');
            div.classList.add('field-wrap-last');
            const p1 = createElement('p', 'error-text');
            p1.textContent = 'Invalid password';
            const p2 = createElement('p', 'error-text');
            p2.textContent = 'Please, try again';

            const fieldBeforeError = document.querySelector('.field-before-error-login');
            console.log('fieldBeforeError', fieldBeforeError);

            div.append(p1, p2);
            fieldBeforeError?.after(div);
        }
        if (state === 'signOutOk') {
            signUpLogInDisable();
            //signUpLogInEnable();
            //displayLogIn();
        }
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
                signUpLogInEnable();
            }
        });
    }

    bindClickExitFromSignupLogin() {
        this.body.addEventListener('click', (event) => {
            const target = event.target as Element;
            if (target.closest('.main-content') && !target.classList.contains('signup-login')) {
                signUpLogInDisable();
            }
        });
    }

    bindClickLogIn() {
        this.body.addEventListener('click', (event) => {
            const target = event.target as Element;
            if (target.classList.contains('login')) {
                displayLogIn();
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

    bindClickForm() {
        this.body.addEventListener('click', (event) => {
            const target = event.target as HTMLInputElement;
            //console.log('bindClickForm target', target);
            if (target.classList.contains('tab-input')) {
                const label = target.previousElementSibling;
                //console.log('bindClickForm label', label);
                label?.classList.add('tab-label-active');
                label?.classList.add('tab-label-highlight');
            }
        });
    }

    bindBlurForm() {
        this.body.addEventListener('focusout', (event) => {
            const target = event.target as HTMLInputElement;
            //console.log('bindBlurForm target', target);
            if (target.classList.contains('tab-input') && target.value === '') {
                const label = target.previousElementSibling;
                console.log('bindBlurForm label', label);
                label?.classList.remove('tab-label-active');
                label?.classList.remove('tab-label-highlight');
            }
        });
    }

    bindClickButtonRegister(handler: (registeredUserObject: IRegisteredUser) => void) {
        this.body.addEventListener('click', async (event) => {
            const target = event.target as HTMLInputElement;
            if (target.classList.contains('button-register')) {
                const inputArray = document.querySelectorAll('.tab-input-first');
                let valid = true;
                for (let i = 0; i < inputArray.length; i++) {
                    if ((inputArray[i] as HTMLInputElement).validity.valid === false) {
                        valid = false;
                        console.log('inputArray[i]', inputArray[i]);
                    }
                }
                if (valid) {
                    console.log('all ok');
                    const inputName = document.querySelector('.input-reg-name') as HTMLInputElement;
                    const inputPhone = document.querySelector('.input-reg-tel') as HTMLInputElement;
                    const inputEmail = document.querySelector('.input-reg-email') as HTMLInputElement;
                    const inputPassword = document.querySelector('.input-reg-password') as HTMLInputElement;
                    const registeredUserObject: IRegisteredUser = {
                        username: inputName.value,
                        userPhone: inputPhone.value,
                        email: inputEmail.value,
                        password: inputPassword.value,
                    };
                    // const signInUserObject: ISignIn = {
                    //     email: inputEmail.value,
                    //     password: inputPassword.value,
                    // };
                    //console.log(registeredUserObject);
                    event.preventDefault();
                    handler(registeredUserObject);
                    // await this.serviceRegisteredUsers.createNewUser(registeredUserObject);
                    // const signInUser = JSON.stringify(await this.serviceRegisteredUsers.signInUser(signInUserObject));
                    // console.log('bindClickButtonRegister signInUser', await signInUser);
                    // await localStorage.clear();
                    // await localStorage.setItem('signInUser', signInUser);
                } else {
                    console.log('all not ok');
                }
            }
        });
    }

    bindClickButtonLogIn(handler: (signInObject: ISignIn) => void) {
        this.body.addEventListener('click', async (event) => {
            const target = event.target as HTMLInputElement;
            if (target.classList.contains('button-login')) {
                const inputArray = document.querySelectorAll('.tab-input-second');
                let valid = true;
                for (let i = 0; i < inputArray.length; i++) {
                    if ((inputArray[i] as HTMLInputElement).validity.valid === false) {
                        valid = false;
                        console.log('inputArray[i]', inputArray[i]);
                    }
                }
                if (valid) {
                    console.log('all ok');
                    const inputEmailLogIn = document.querySelector('.input-login-email') as HTMLInputElement;
                    const inputPasswordLogIn = document.querySelector('.input-login-password') as HTMLInputElement;
                    const signInUserObject: ISignIn = {
                        email: inputEmailLogIn.value,
                        password: inputPasswordLogIn.value,
                    };
                    console.log('bindClickButtonLogIn');
                    event.preventDefault();
                    handler(signInUserObject);
                    // const signInUser = JSON.stringify(await this.serviceRegisteredUsers.signInUser(signInUserObject));
                    // console.log('bindClickButtonLogIn signInUser', await signInUser);
                    // await localStorage.clear();
                    // await localStorage.setItem('signInUser', signInUser);
                    //await event.preventDefault();
                } else {
                    console.log('all not ok');
                }
            }
        });
    }

    bindLoad(handler: () => void) {
        document.addEventListener('load', () => {
            console.log('bindLoad');
            handler();
        });
    }
}
