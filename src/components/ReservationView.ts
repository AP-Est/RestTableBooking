import getElement from '../Utils/getElement';
import createElement from '../Utils/createElement';
import '../styles/styleReservation.scss';

export class ReservationView {
    body: HTMLElement;
    div: HTMLElement;

    constructor() {
        this.body = getElement('body') as HTMLElement;

        this.div = createElement('div', 'div-test2', 'statclass');

        this.body.append(this.div);
    }
}
