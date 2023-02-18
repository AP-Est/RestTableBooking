import { ITimeView } from '../../types/types';
import createElement from '../../Utils/createElement';

export default function createCalendarAndTimer(timeView: ITimeView) {
    const timerAndCalendarWrapper = createElement('div', 'calendarTimer__wrapper');
    const timerAndCalendarForm = createElement('form', 'calendarTimer__form');
    const timerWrapper = createElement('div', 'timer__wrapper');
    const dateGuestInput = createElement('div', 'dateGuest__wrapper');
    const dateInput = createDateInputElement(timeView);
    const guestInput = createGuestInputElement(timeView);
    dateGuestInput.append(dateInput, guestInput);
    const timeInput = createTimeInputElement(timeView);
    const rows = createElement('div', 'inner__rows');
    const timeFromOutput = createElement('div', 'timeFromOutput__wrapper');
    if (timeView.markLine % 2 != 0) timeFromOutput.innerText = `Time: ${(timeView.markLine - 1) / 2 + 12}:00`;
    if (timeView.markLine % 2 == 0) timeFromOutput.innerText = `Time: ${(timeView.markLine - 2) / 2 + 12}:30`;
    timerWrapper.append(rows, timeInput);
    timerAndCalendarForm.append(dateGuestInput, timeFromOutput, timerWrapper);
    timerAndCalendarWrapper.append(timerAndCalendarForm);
    return timerAndCalendarWrapper;
}
function createDateInputElement(timeView: ITimeView) {
    const dateInputElement = createElement('input', 'date__input') as HTMLInputElement;
    dateInputElement.type = 'date';
    dateInputElement.valueAsDate = timeView.chosenDate || new Date();
    const dateMax = new Date();
    dateMax.setDate(dateMax.getDate() + 7);
    const refDateMax = `${dateMax.getFullYear()}-${('0' + (dateMax.getMonth() + 1)).slice(-2)}-${dateMax.getDate()}`;
    dateInputElement.max = refDateMax;
    const dateMin = new Date();
    const refDateMin = `${dateMin.getFullYear()}-${('0' + (dateMin.getMonth() + 1)).slice(-2)}-${dateMin.getDate()}`;
    dateInputElement.min = refDateMin;
    return dateInputElement;
}
function createGuestInputElement(timeView: ITimeView) {
    const guestInputElementWrap = createElement('div', 'guest__input_wrapper');
    const guestInputElement = createElement('input', 'guest__input') as HTMLInputElement;
    guestInputElement.type = 'number';
    guestInputElement.min = '1';
    guestInputElement.defaultValue = `${timeView.guestCount}`;
    const text = createElement('span', 'guest__input_text');
    text.innerText = 'Guests:';
    guestInputElementWrap.append(text, guestInputElement);
    return guestInputElementWrap;
}

function createTimeInputElement(timeView: ITimeView) {
    const wrapper = createElement('div', 'line__wrapper');
    const preBlock = createElement('div', 'line__wrapper_preBlock', 'preAfterBlocks');
    //preBlock.innerText = 'closed';
    const afterBlock = createElement('div', 'line__wrapper_afterBlock', 'preAfterBlocks');
    wrapper.append(preBlock);
    for (let i = 0; i < 12; i++) {
        const hourTitleWrapper = createElement('div', 'hourTitleWrapper');
        const hourBlock = createElement('div', 'hourBlock');
        const shortLine = createElement('div', 'shortLine');
        shortLine.id = `${i * 2 + 2}scale`;
        if (i == (timeView.markLine - 2) / 2) {
            shortLine.classList.add('marked');
        }
        const longLine = createElement('div', 'longLine');
        longLine.id = `${i * 2 + 1}scale`;
        if (i == (timeView.markLine - 1) / 2) {
            longLine.classList.add('marked');
        }
        hourBlock.append(longLine, shortLine);
        const time = createElement('div', 'timeLine');
        if (i % 2 == 0) {
            time.innerText = `${i + 12}:00`;
        }
        hourTitleWrapper.append(hourBlock, time);
        wrapper.append(hourTitleWrapper);
    }
    wrapper.append(afterBlock);
    return wrapper;
}
