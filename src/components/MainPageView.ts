import getElement from '../Utils/getElement';
import createElement from '../Utils/createElement';
import '../styles/styleMainPage.scss';
import createHeader from '../templates/createHeader';

export class MainPageView {
    body: HTMLElement;
    div: HTMLElement;
    header: HTMLElement;

    constructor() {
        this.body = getElement('body') as HTMLElement;
        this.body.innerHTML = '';
        this.div = createElement('div', 'div-test');

        this.header = createHeader();
        this.body.append(this.header, this.div);
    }
}
