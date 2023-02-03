import createElement from '../../Utils/createElement';

export default function createCalendarAndTimer() {
    const timerAndCalendarWrapper = createElement('div', 'calendarTimer__wrapper');
    const timerAndCalendarForm = createElement('form', 'calendarTimer__wrapper');
    const timerWrapper = createElement('div', 'timer__wrapper');
    const rows = createElement('div', 'inner__rows');
    rows.innerText = `|│|│|│|│|│|│|│|│|│|│|│|│|`;
    const timeInput = createTimeInputElement();
    const dateInput = createDateInputElement();
    const timeFromInput = createElement('div', 'timeFromInput__wrapper');
    const utcChange = new Date().getTimezoneOffset();
    const refactoredTime = new Date((12 * 60 + Number(timeInput.value) + utcChange) * 60 * 1000);
    timeInput.addEventListener('input', () => {
        const currentTime = new Date((12 * 60 + Number(timeInput.value) + utcChange) * 60 * 1000);
        const hours = currentTime.getHours();
        const minutes = ('0' + currentTime.getMinutes()).slice(-2);
        timeFromInput.innerText = `Time ${hours}:${minutes}`;
    });
    timeFromInput.innerText = `Time ${refactoredTime.getHours()}:${('0' + refactoredTime.getMinutes()).slice(-2)}`;
    timerWrapper.append(rows, timeInput);
    timerAndCalendarForm.append(dateInput, timeFromInput, timerWrapper);
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
function createTimeInputElement() {
    const timeInputElement = createElement('input', 'time__input') as HTMLInputElement;
    timeInputElement.type = 'range';
    timeInputElement.name = 'range';
    timeInputElement.min = '0';
    timeInputElement.max = '720';
    timeInputElement.step = '30';
    return timeInputElement;
}
