import getElement from '../Utils/getElement';
import createElement from '../Utils/createElement';
import '../styles/styleReservation.scss';
import createHeader from '../templates/createHeader';
import createCalendarAndTimer from '../templates/reservation/createCalendarTime';
import { IReservationWindow, ITableState, ITimeView } from '../types/types';
import createHallBlock from '../templates/reservation/createHallBlock';
import { displayHeaderReservation } from '../templates/displayHeaderReservation';
import createModalTableInfo from '../templates/reservation/createModalTableInfo';
import createModalReservationReg from '../templates/reservation/createModalReservationReg';
import createModalReservationUnReg from '../templates/reservation/createModalReservationUnReg';

export class ReservationView {
    body!: HTMLElement;
    div!: HTMLElement;
    header!: HTMLElement;
    calendarAndTime!: HTMLElement;
    hall!: HTMLElement;
    reservationWrapper!: HTMLElement;
    modalTableInfo!: HTMLElement;
    modalReservationReg!: HTMLElement;
    shadow!: HTMLElement;
    modalReservationUnReg!: HTMLElement;

    constructor() {
        console.log();
    }

    reservationRender(timeView: ITimeView, hallView: ITableState[], reservationWindow: IReservationWindow) {
        this.body = getElement('body') as HTMLElement;
        this.body.innerHTML = '';
        this.reservationWrapper = createElement('div', 'reservation__globalWrapper');
        this.shadow = createElement('div', 'shadow__globalWrapper');
        this.header = displayHeaderReservation();
        this.calendarAndTime = createCalendarAndTimer(timeView);
        this.hall = createHallBlock(hallView);
        this.modalTableInfo = createModalTableInfo(timeView, hallView, reservationWindow);
        this.modalReservationReg = createModalReservationReg(timeView, hallView, reservationWindow);
        this.modalReservationUnReg = createModalReservationUnReg(timeView, hallView, reservationWindow);
        this.reservationWrapper.append(
            this.calendarAndTime,
            this.hall,
            this.modalTableInfo,
            this.modalReservationReg,
            this.modalReservationUnReg
        );
        this.body.append(this.header, this.reservationWrapper, this.shadow);
        this.reservationModalSwitch(reservationWindow);
    }
    reservationModalSwitch(reservationWindow: IReservationWindow) {
        const modalTable = getElement('.tableInfo__wrapper') as HTMLElement;
        const modalRes = getElement('.reservationReg__wrapper') as HTMLElement;
        const modalResUnReg = getElement('.reservationUnReg__wrapper') as HTMLElement;
        const shadow = getElement('.shadow__globalWrapper') as HTMLElement;
        switch (reservationWindow.modalFlag) {
            case 'Main': {
                modalTable.style.display = 'none';
                modalRes.style.display = 'none';
                modalResUnReg.style.display = 'none';
                shadow.style.display = 'none';
                break;
            }
            case 'Table': {
                modalTable.style.display = 'flex';
                modalRes.style.display = 'none';
                modalResUnReg.style.display = 'none';
                shadow.style.display = 'flex';
                break;
            }
            case 'Reservation': {
                modalTable.style.display = 'none';
                modalRes.style.display = 'flex';
                modalResUnReg.style.display = 'none';
                shadow.style.display = 'flex';
                break;
            }
            case 'ReservationUnreg': {
                modalTable.style.display = 'none';
                modalRes.style.display = 'none';
                modalResUnReg.style.display = 'flex';
                shadow.style.display = 'flex';
                break;
            }
            default: {
                modalTable.style.display = 'none';
                modalRes.style.display = 'flex';
                modalResUnReg.style.display = 'flex';
                shadow.style.display = 'flex';
                break;
            }
        }
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
    bindDate(handler: (changedDate: Date) => void) {
        document.body.addEventListener('change', (event) => {
            const target = event.target as HTMLInputElement;
            if (target.classList.contains('date__input')) {
                const changedDate = new Date(target.value);
                handler(changedDate);
            }
        });
    }
    bindGuest(handler: (guestCount: number) => void) {
        document.body.addEventListener('change', (event) => {
            const target = event.target as HTMLInputElement;
            if (target.classList.contains('guest__input')) {
                const guestCount = +target.value;
                handler(guestCount);
            }
        });
    }
    bindClickToTable(handler: (tableNumber: number) => void) {
        document.body.addEventListener('click', (event) => {
            const target = event.target as HTMLDivElement;
            const parent = target.parentElement as HTMLDivElement;
            const grand = parent.parentElement as HTMLDivElement;
            if (parent.classList.contains('hall__allTables')) {
                const tableNumber = parseInt(parent.id);
                handler(tableNumber);
            } else if (grand.classList.contains('hall__allTables')) {
                const tableNumber = parseInt(grand.id);
                handler(tableNumber);
            }
        });
    }
    bindClickToRButton(handler: (resTimeNum: number) => void) {
        document.body.addEventListener('click', (event) => {
            const target = event.target as HTMLDivElement;
            if (target.classList.contains('reservation__button')) {
                const resTimeNum = parseInt(target.id);
                handler(resTimeNum);
            }
        });
    }
    bindClickToShadow(handler: () => void) {
        document.body.addEventListener('click', (event) => {
            const target = event.target as HTMLDivElement;
            if (target.classList.contains('shadow__globalWrapper')) {
                handler();
            }
        });
    }
    bindSetDuration(handler: (tableDuration: number) => void) {
        document.body.addEventListener('change', (event) => {
            //event.preventDefault();
            const target = event.target as HTMLInputElement;
            if (target.classList.contains('duration__block_input')) {
                const tableDuration = +target.value;
                handler(tableDuration);
            }
        });
    }
    bindSetName(handler: (userName: string) => void) {
        document.body.addEventListener('change', (event) => {
            const target = event.target as HTMLInputElement;
            if (target.classList.contains('name__block_input')) {
                const userName = target.value;
                handler(userName);
            }
        });
    }
    bindSetPhone(handler: (userPhone: string) => void) {
        document.body.addEventListener('change', (event) => {
            const target = event.target as HTMLInputElement;
            if (target.classList.contains('phone__block_input')) {
                const userPhone = target.value;
                handler(userPhone);
            }
        });
    }
}
