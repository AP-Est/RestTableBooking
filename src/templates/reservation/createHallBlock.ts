import { ITableState } from '../../types/types';
import createElement from '../../Utils/createElement';
import { renderTable } from '../../Utils/renderTable';

export default function createHallBlock(hallView: ITableState[]) {
    const windowOuterWidth = window.outerWidth;
    const windowOuterHeight = window.outerHeight;
    const wrapper = createElement('div', 'hall__wrapper');
    /*
    //const colorT = '#B0ADAD';
    const colorT = true;
    const colorS = false;
    //const tableType = 2;
    const tableType = [4, 4, 2, 4, 4, 8, 2, 6, 2, 6];
    for (let i = 1; i <= 10; i++) {
        const setTableColor = colorT ? 'red' : 'yellow';
        const setSitColor = colorS ? 'red' : 'yellow';
        const table = createElement('div', `hall__table${i}`, 'hall__allTables');
        wrapper.appendChild(table);
        table.innerHTML = renderTable(tableType[i - 1], setTableColor, setSitColor);
    }
    */
    for (let i = 0; i < 10; i++) {
        const table = createElement('div', `hall__table${hallView[i].tableNumber}`, 'hall__allTables');
        wrapper.appendChild(table);
        table.innerHTML = renderTable(hallView[i].tableType, hallView[i].tableColor, hallView[i].sitColor);
    }
    if (windowOuterWidth > windowOuterHeight) {
        wrapper.style.width = '75vh';
        wrapper.style.height = '75vh';
    } else {
        wrapper.style.width = '75vw';
        wrapper.style.height = '75vw';
    }
    return wrapper;
}
