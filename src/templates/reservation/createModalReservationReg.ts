import { ITimeView, ITableState, IReservationWindow } from '../../types/types';
import createElement from '../../Utils/createElement';
import createButton from '../../Utils/createButton';

export default function createModalReservationReg(
    timeView: ITimeView,
    hallView: ITableState[],
    reservationWindow: IReservationWindow
) {
    const wrapper = createElement('div', 'reservationReg__wrapper');
    const infoBlock = createInfoBlock(timeView, hallView, reservationWindow);
    const inputComment = createCommentBlock();
    const buttonBlock = createButtonBlock();
    wrapper.append(infoBlock, inputComment, buttonBlock);
    return wrapper;
}
function createInfoBlock(timeView: ITimeView, hallView: ITableState[], reservationWindow: IReservationWindow) {
    const wrapper = createElement('div', 'infoBlock__wrapper');
    const tableNumber = createElement('div', 'tableNumber__wrapper');
    const tableNumberOutput = createElement('div', 'tableNumber__output');
    tableNumberOutput.innerText = `Table № ${hallView[reservationWindow.tableNumber].tableNumber}`;
    tableNumber.append(tableNumberOutput);
    const tableDetailsBlock = createElement('div', 'tableDetailsBlock__wrapper');
    const tableDetailsDate = createElement('div', 'tableDetailsBlock__date');
    tableDetailsDate.innerText = `Date: ${timeView.chosenDate.getFullYear()}-${(
        '0' +
        (timeView.chosenDate.getMonth() + 1)
    ).slice(-2)}-${timeView.chosenDate.getDate()}`;
    const tableDetailsTime = createElement('div', 'tableDetailsBlock__time');
    tableDetailsTime.innerText = `Time: ${reservationWindow.resTimeNum + 12}:00`;
    const tableDetailsGuest = createElement('div', 'tableDetailsBlock__guests');
    tableDetailsGuest.innerText = `Guest: ${timeView.guestCount}`;
    tableDetailsBlock.append(tableDetailsDate, tableDetailsTime, tableDetailsGuest);
    wrapper.append(tableNumber, tableDetailsBlock);
    return wrapper;
}
function createCommentBlock() {
    const wrapper = createElement('div', 'commentBlock__wrapper');
    const inputTableDuration = createElement('input', 'comment__block_input') as HTMLInputElement;
    inputTableDuration.type = 'number';
    wrapper.append(inputTableDuration);
    return wrapper;
}
function createButtonBlock() {
    const wrapper = createElement('div', 'buttonBlock__wrapper');
    const buttonReservation = createButton('Reservation', 'button__reservation');
    wrapper.append(buttonReservation);
    return wrapper;
}
