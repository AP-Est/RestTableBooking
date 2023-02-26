export function displayLogIn() {
    const logIn = document.querySelector('.tab-content > div:last-child');
    (logIn as HTMLElement).style.display = 'block';
    const signUp = document.querySelector('.tab-content > div:first-child');
    (signUp as HTMLElement).style.display = 'none';
    const logInButton = document.querySelector('.tab-buttons > li:last-child');
    const SignUpButton = document.querySelector('.tab-buttons > li:first-child');
    (logInButton as HTMLElement).classList.add('active');
    (SignUpButton as HTMLElement).classList.remove('active');
}
