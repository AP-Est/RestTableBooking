import createElement from '../../Utils/createElement';
import createButton from '../../Utils/createElement';

export default function createModalReservationReg() {
    const wrapper = createElement('div', 'tableInfo__wrapper');
    const infoBlock = createInfoBlock();
    const inputComment = createCommentBlock();
    const buttonBlock = createButtonBlock();
    wrapper.append(infoBlock, inputComment, buttonBlock);
    return wrapper;
}
export function createInfoBlock() {
    const wrapper = createElement('div', 'infoBlock__wrapper');
    const tableNumber = createElement('div', 'tableNumber__wrapper');
    const tableNumberOutput = createElement('div', 'tableNumber__output');
    tableNumber.append(tableNumberOutput);
    const tableDetailsBlock = createElement('div', 'tableDetailsBlock__wrapper');
    const tableDetailsDate = createElement('div', 'tableDetailsBlock__date');
    const tableDetailsTime = createElement('div', 'tableDetailsBlock__time');
    const tableDetailsGuest = createElement('div', 'tableDetailsBlock__guests');
    tableDetailsBlock.append(tableDetailsDate, tableDetailsTime, tableDetailsGuest);
    wrapper.append(tableNumber, tableDetailsBlock);
    return wrapper;
}
export function createCommentBlock() {
    const wrapper = createElement('div', 'commentBlock__wrapper');
    const inputTableDuration = createElement('input', 'comment__block_input') as HTMLInputElement;
    inputTableDuration.type = 'number';
    const inputComment = createElement('input', 'comment__block_input') as HTMLInputElement;
    inputComment.type = 'text';
    wrapper.append(inputComment);
    return wrapper;
}
export function createButtonBlock() {
    const wrapper = createElement('div', 'buttonBlock__wrapper');
    const buttonReservation = createButton('Reservation', 'button__reservation');
    wrapper.append(buttonReservation);
    return wrapper;
}
