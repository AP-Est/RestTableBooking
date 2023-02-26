export function signUpLogInDisable() {
    const form = document.querySelector('.form-wrap');
    (form as HTMLElement).style.display = 'none';
    const main = document.querySelector('.main-content') as HTMLElement;
    main.classList.remove('main-content_passive');
}
