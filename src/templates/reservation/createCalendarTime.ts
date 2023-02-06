import { ITimeView } from '../../types/types';
import createElement from '../../Utils/createElement';

export default function createCalendarAndTimer(timeView: ITimeView) {
    const timerAndCalendarWrapper = createElement('div', 'calendarTimer__wrapper');
    const timerAndCalendarForm = createElement('form', 'calendarTimer__form');
    const timerWrapper = createElement('div', 'timer__wrapper');
    const dateGuestInput = createElement('div', 'dateGuest__wrapper');
    const dateInput = createDateInputElement();
    const guestInput = createGuestInputElement();
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
function createDateInputElement() {
    const dateInputElement = createElement('input', 'date__input') as HTMLInputElement;
    dateInputElement.type = 'date';
    dateInputElement.valueAsDate = new Date();
    console.log(dateInputElement.valueAsDate);
    return dateInputElement;
}
function createGuestInputElement() {
    const guestInputElement = createElement('input', 'guest__input') as HTMLInputElement;
    guestInputElement.type = 'number';
    guestInputElement.defaultValue = '1';
    return guestInputElement;
}

function createTimeInputElement(timeView: ITimeView) {
    const wrapper = createElement('div', 'line__wrapper');
    const preBlock = createElement('div', 'line__wrapper_preBlock', 'preAfterBlocks');
    preBlock.innerText = 'closed';
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
