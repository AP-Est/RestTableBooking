import { ITableState } from '../../types/types';
import { renderTable } from '../../Utils/renderTable';
import createElement from '../../Utils/createElement';

export default function createHallBlock(hallView: ITableState[]) {
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
    return wrapper;
}
