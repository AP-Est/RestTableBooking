import getElement from '../Utils/getElement';
import createElement from '../Utils/createElement';
import '../styles/styleReservation.scss';
import createHeader from '../templates/createHeader';
import createCalendarAndTimer from '../templates/reservation/createCalendarTime';
import { ITimeView } from '../types/types';

export class ReservationView {
    body!: HTMLElement;
    div!: HTMLElement;
    header!: HTMLElement;
    calendarAndTime!: HTMLElement;

    constructor() {
        const timeView = {
            markLine: 0,
            currentDate: new Date(),
        };
        this.reservationRender(timeView);
    }

    reservationRender(timeView: ITimeView) {
        this.body = getElement('body') as HTMLElement;
        this.body.innerHTML = '';
        this.header = createHeader();
        this.calendarAndTime = createCalendarAndTimer(timeView);

        this.body.append(this.header, this.calendarAndTime);
    }
    bindTimeLine(handler: (markLine: number) => void) {
        this.body.addEventListener('click', (event) => {
            const target = event.target as HTMLDivElement;
            console.log(target);
            if (target.classList.contains('longLine') || target.classList.contains('shortLine')) {
                //target.classList.add('marked');
                const markLine = parseInt(target.id);
                console.log(target);
                handler(markLine);
            }
        });
    }
}
