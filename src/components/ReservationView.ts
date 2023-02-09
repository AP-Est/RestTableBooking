import getElement from '../Utils/getElement';
import createElement from '../Utils/createElement';
import '../styles/styleReservation.scss';
import createHeader from '../templates/createHeader';
import createCalendarAndTimer from '../templates/reservation/createCalendarTime';
import { ITableState, ITimeView } from '../types/types';
import createHallBlock from '../templates/reservation/createHallBlock';

export class ReservationView {
    body!: HTMLElement;
    div!: HTMLElement;
    header!: HTMLElement;
    calendarAndTime!: HTMLElement;
    hall!: HTMLElement;
    reservationWrapper!: HTMLElement;

    constructor() {
        console.log();
    }

    reservationRender(timeView: ITimeView, hallView: ITableState[]) {
        this.body = getElement('body') as HTMLElement;
        this.body.innerHTML = '';
        this.reservationWrapper = createElement('div', 'reservation__globalWrapper');
        this.header = createHeader();
        this.calendarAndTime = createCalendarAndTimer(timeView);
        this.hall = createHallBlock(hallView);
        this.reservationWrapper.append(this.calendarAndTime, this.hall);
        this.body.append(this.header, this.reservationWrapper);
    }
    bindTimeLine(handler: (markLine: number) => void) {
        document.body.addEventListener('click', (event) => {
            const target = event.target as HTMLDivElement;
            if (target.classList.contains('longLine') || target.classList.contains('shortLine')) {
                const markLine = parseInt(target.id);
                handler(markLine);
            }
        });
    }
}
