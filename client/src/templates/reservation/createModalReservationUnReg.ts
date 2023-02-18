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
    const inputDuration = createDurationBlock(reservationWindow);
    const userInfo = createUserInfoBlock(reservationWindow);
    const buttonBlock = createButtonBlock();
    const successMessage = createSuccessWindows(reservationWindow);
    wrapper.append(infoBlock, inputDuration, userInfo, buttonBlock, successMessage);
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
function createDurationBlock(reservationWindow: IReservationWindow) {
    const wrapper = createElement('div', 'durationBlock__wrapper');
    const dataWrapper = createElement('div', 'dataBlock__wrapper');
    const errorWrapper = createElement('div', 'errorBlock__wrapper');
    const inputText = createElement('div', 'text');
    inputText.innerText = 'Enter duration:';
    const inputTableDuration = createElement('input', 'duration__block_input') as HTMLInputElement;
    inputTableDuration.defaultValue = `${reservationWindow.tableDuration}`;
    inputTableDuration.type = 'number';
    const inputTextPost = createElement('div', 'text');
    inputTextPost.innerText = 'h';
    errorWrapper.innerText = `Wrong duration, table free only ${reservationWindow.freeHours} h`;
    errorWrapper.style.display = 'none';
    if (reservationWindow.errors.duration) {
        errorWrapper.style.display = 'flex';
    }
    dataWrapper.append(inputText, inputTableDuration, inputTextPost);
    wrapper.append(dataWrapper, errorWrapper);
    return wrapper;
}
function createUserInfoBlock(reservationWindow: IReservationWindow) {
    const wrapper = createElement('div', 'userInfoBlock__wrapper');
    const wrapperName = createElement('div', 'userInfoBlock__wrapper_name');
    const inputNameText = createElement('div', 'text');
    inputNameText.innerText = 'Enter Name:';
    const inputUserName = createElement('input', 'name__block_input') as HTMLInputElement;
    inputUserName.placeholder = 'Name';
    inputUserName.type = 'Text';
    inputUserName.value = reservationWindow.userName || '';
    const errorWrapperN = createElement('div', 'errorBlock__wrapper_name');
    errorWrapperN.innerText = `Name may contain only letters`;
    errorWrapperN.style.display = reservationWindow.errors.name ? 'flex' : 'none';
    const wrapperPhone = createElement('div', 'userInfoBlock__wrapper_phone');
    const inputPhoneText = createElement('div', 'text');
    inputPhoneText.innerText = 'Enter Phone:';
    const inputUserPhone = createElement('input', 'phone__block_input') as HTMLInputElement;
    inputUserPhone.defaultValue = reservationWindow.userPhone || '+375 ';
    inputUserPhone.type = 'tel';
    const errorWrapperP = createElement('div', 'errorBlock__wrapper_phone');
    errorWrapperP.innerText = `Phone may contain '+' and numbers`;
    errorWrapperP.style.display = reservationWindow.errors.phone ? 'flex' : 'none';
    const nameBlockWrapper = createElement('div', 'nameBlock__wrapper');
    const phoneBlockWrapper = createElement('div', 'phoneBlock__wrapper');
    wrapperName.append(inputNameText, inputUserName);
    wrapperPhone.append(inputPhoneText, inputUserPhone);
    nameBlockWrapper.append(wrapperName, errorWrapperN);
    phoneBlockWrapper.append(wrapperPhone, errorWrapperP);
    wrapper.append(nameBlockWrapper, phoneBlockWrapper);
    return wrapper;
}

function createButtonBlock() {
    const wrapper = createElement('div', 'buttonBlock__wrapper');
    const buttonReservation = createButton('Reservation', 'button__reservation');
    wrapper.append(buttonReservation);
    return wrapper;
}

function createSuccessWindows(reservationWindow: IReservationWindow) {
    const createWinnerMessage = createElement('div', 'successMessage__wrapper');
    createWinnerMessage.hidden = !reservationWindow.resComplete;
    const createWinnerText = createElement('span', 'successMessage__text');
    createWinnerText.innerText = 'Reservation complied';
    createWinnerMessage.append(createWinnerText);
    return createWinnerMessage;
}
