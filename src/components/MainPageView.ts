import getElement from '../Utils/getElement';
import createElement from '../Utils/createElement';
import '../styles/styleMainPage.scss';

export class MainPageView {
    body: HTMLElement;
    div: HTMLElement;

    constructor() {
        this.body = getElement('body') as HTMLElement;

        this.div = createElement('div', 'div-test');

        this.body.append(this.div);
    }
}
