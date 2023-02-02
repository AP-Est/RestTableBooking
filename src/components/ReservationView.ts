import getElement from '../Utils/getElement';
import createElement from '../Utils/createElement';
import '../styles/styleReservation.scss';
import createHeader from '../templates/createHeader';

export class ReservationView {
    body: HTMLElement;
    div: HTMLElement;
    header: HTMLElement;

    constructor() {
        this.body = getElement('body') as HTMLElement;
        this.body.innerHTML = '';
        this.header = createHeader();
        this.div = createElement('div', 'div-test2', 'statclass');

        this.body.append(this.header, this.div);
    }
}
