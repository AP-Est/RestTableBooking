import { ITimeView, ITableState, IReservationWindow } from '../../types/types';
import createElement from '../../Utils/createElement';
import createButton from '../../Utils/createButton';

export default function createModalTableInfo(
    timeView: ITimeView,
    hallView: ITableState[],
    reservationWindow: IReservationWindow
) {
    const wrapper = createElement('div', 'tableInfo__wrapper');
    const infoBlock = createInfoBlock(timeView, hallView, reservationWindow);
    const scheduleBlock = createScheduleBlock();
    wrapper.append(infoBlock, scheduleBlock);
    return wrapper;
}
export function createInfoBlock(timeView: ITimeView, hallView: ITableState[], reservationWindow: IReservationWindow) {
    const tableNumber = reservationWindow.tableNumber;
    const wrapper = createElement('div', 'infoBlock__wrapper');
    const tableInfoDate = createElement('div', 'tableInfoBlock__date');
    tableInfoDate.innerText = `Date: ${timeView.chosenDate.getFullYear()}-${(
        '0' +
        (timeView.chosenDate.getMonth() + 1)
    ).slice(-2)}-${timeView.chosenDate.getDate()}`;
    const tableInfoNumber = createElement('div', 'tableInfoBlock__number');
    tableInfoNumber.innerText = `Table № ${hallView[tableNumber].tableNumber}`;
    const tableInfoCount = createElement('div', 'tableInfoBlock__count');
    tableInfoCount.innerText = `MaxGuests: ${hallView[tableNumber].tableType}`;
    wrapper.append(tableInfoDate, tableInfoNumber, tableInfoCount);
    wrapper.append();
    return wrapper;
}
export function createScheduleBlock() {
    const wrapper = createElement('div', 'scheduleBlock__wrapper');
    const flag = [1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1];
    for (let i = 0; i < 12; i++) {
        const tableScheduleH = createElement('div', 'tableScheduleH__wrapper');
        tableScheduleH.id = `${i}_schedule`;
        const scheduleH = createElement('div', 'scheduleH__time');
        scheduleH.innerText = `${i + 12}:00`;
        const scheduleStatus = createElement('div', 'scheduleH__status');
        if (flag[i] === 1) {
            scheduleStatus.innerText = `Busy`;
            scheduleStatus.classList.add('busyTable');
        } else {
            const button = createButton('Reservation', `${i}_reservationSchedule`, 'reservation__button');
            scheduleStatus.append(button);
        }

        tableScheduleH.append(scheduleH, scheduleStatus);
        wrapper.append(tableScheduleH);
    }
    wrapper.append();
    return wrapper;
}
/*
export function createButtonBlock() {
    const wrapper = createElement('div', 'buttonBlock__wrapper');
    const buttonReservation = createButton('Reservation', 'button__reservation');
    wrapper.append(buttonReservation);
    return wrapper;
}
*/
