import { ITableState, ITimeView } from '../types/types';
export class ReservationModel {
    onChangeModel!: CallableFunction;
    markLine: number;
    timeView: ITimeView;
    currentDate: Date;
    tableState: ITableState;
    hallView: ITableState[];
    busyElement: string;
    freeElement: string;
    constructor() {
        this.currentDate = new Date();
        this.markLine = this.getCurrentTimeLine();
        this.timeView = {
            markLine: this.markLine,
            currentDate: this.currentDate,
        };
        this.tableState = {
            tableNumber: 0,
            tableType: 2,
            tableColor: '',
            sitColor: '',
        };
        this.hallView = [];
        this.busyElement = 'Red';
        this.freeElement = 'Gray';
        this.getHallView();
        console.log(this.hallView);
    }
    bindChangeModel(callback: CallableFunction) {
        this.onChangeModel = callback;
    }
    private commit() {
        this.onChangeModel(this.timeView, this.hallView);
    }
    private getCurrentTimeLine() {
        const hours = this.currentDate.getHours();
        if (hours >= 12 && hours <= 24) {
            return hours - 12 / 2 - 1;
        } else return 1;
    }
    private getHallView() {
        for (let i = 0; i < 10; i++) {
            const tableType = [4, 4, 2, 4, 4, 8, 2, 6, 2, 6];
            const randChangeT = 5 < Math.random() * 10 ? this.busyElement : this.freeElement;
            const randChangeS = 5 < Math.random() * 10 ? this.busyElement : this.freeElement;
            const tableState = {
                tableNumber: i + 1,
                tableType: tableType[i],
                tableColor: `${randChangeT}`,
                sitColor: `${randChangeS}`,
            };
            this.hallView.push(tableState);
        }
    }
    handleTimeLine(markLine: number) {
        this.timeView.markLine = markLine;
        this.commit();
    }
}
