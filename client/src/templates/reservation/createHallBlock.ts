import { ITableState } from '../../types/types';
import createElement from '../../Utils/createElement';
import { renderTable } from '../../Utils/renderTable';

export default function createHallBlock(hallView: ITableState[]) {
    const windowOuterWidth = window.outerWidth;
    const windowOuterHeight = window.outerHeight;
    const wrapper = createElement('div', 'hall__wrapper');
    for (let i = 0; i < 10; i++) {
        const table = createElement('div', `hall__table${hallView[i].tableNumber}`, 'hall__allTables');
        table.id = `${i}_table`;
        const texts = createElement('div', 'table__text');
        texts.innerText = `${hallView[i].tableNumber}`;
        table.innerHTML = renderTable(hallView[i].tableType, hallView[i].tableColor, hallView[i].sitColor);
        table.appendChild(texts);
        wrapper.append(table);
    }
    //wrapper.style.width = wrapper.style.height = windowOuterWidth > windowOuterHeight ? '75vh' : '75vw';
    return wrapper;
}
