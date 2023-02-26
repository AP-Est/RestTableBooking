export function signUpLogInEnable() {
    const form = document.querySelector('.form-wrap');
    (form as HTMLElement).style.display = 'block';
    const main = document.querySelector('.main-content');
    (main as HTMLElement).classList.add('main-content_passive');
}
