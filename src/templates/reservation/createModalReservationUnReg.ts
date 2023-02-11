import { ITimeView, ITableState, IReservationWindow } from '../../types/types';
import createElement from '../../Utils/createElement';
import createButton from '../../Utils/createButton';

export default function createModalReservationUnReg(
    timeView: ITimeView,
    hallView: ITableState[],
    reservationWindow: IReservationWindow
) {
    const wrapper = createElement('div', 'reservationUnReg__wrapper');
    const infoBlock = createInfoBlock(timeView, hallView, reservationWindow);
    const inputDuration = createDurationBlock();
    const userInfo = createUserInfoBlock();
    const buttonBlock = createButtonBlock();
    wrapper.append(infoBlock, inputDuration, userInfo, buttonBlock);
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
function createDurationBlock() {
    const wrapper = createElement('div', 'durationBlock__wrapper');
    const inputText = createElement('div', 'text');
    inputText.innerText = 'Enter duration:';
    const inputTableDuration = createElement('input', 'duration__block_input') as HTMLInputElement;
    inputTableDuration.defaultValue = '1';
    inputTableDuration.type = 'number';
    const inputTextPost = createElement('div', 'text');
    inputTextPost.innerText = 'h';
    wrapper.append(inputText, inputTableDuration, inputTextPost);
    return wrapper;
}
function createUserInfoBlock() {
    const wrapper = createElement('div', 'userInfoBlock__wrapper');
    const wrapperName = createElement('div', 'userInfoBlock__wrapper_name');
    const inputNameText = createElement('div', 'text');
    inputNameText.innerText = 'Enter Name:';
    const inputUserName = createElement('input', 'name__block_input') as HTMLInputElement;
    inputUserName.placeholder = 'Name';
    inputUserName.type = 'Text';
    const wrapperPhone = createElement('div', 'userInfoBlock__wrapper_phone');
    const inputPhoneText = createElement('div', 'text');
    inputPhoneText.innerText = 'Enter Phone:';
    const inputUserPhone = createElement('input', 'name__block_input') as HTMLInputElement;
    inputUserPhone.defaultValue = '+375 () ';
    inputUserPhone.type = 'tel';
    wrapperName.append(inputNameText, inputUserName);
    wrapperPhone.append(inputPhoneText, inputUserPhone);
    wrapper.append(wrapperName, wrapperPhone);
    return wrapper;
}

function createButtonBlock() {
    const wrapper = createElement('div', 'buttonBlock__wrapper');
    const buttonReservation = createButton('Reservation', 'button__reservation');
    wrapper.append(buttonReservation);
    return wrapper;
}
