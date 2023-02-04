import getElement from '../Utils/getElement';
import createElement from '../Utils/createElement';
import '../styles/styleReservation.scss';
import createHeader from '../templates/createHeaderOld';
import createCalendarAndTimer from '../templates/reservation/createCalendarTime';

export class ReservationView {
    body: HTMLElement;
    div: HTMLElement;
    header: HTMLElement;
    calendarAndTime: HTMLElement;

    constructor() {
        this.body = getElement('body') as HTMLElement;
        this.body.innerHTML = '';
        this.header = createHeader();
        this.calendarAndTime = createCalendarAndTimer();
        this.div = createElement('div', 'div-test2', 'statclass');

        this.body.append(this.header, this.div, this.calendarAndTime);
    }
}
