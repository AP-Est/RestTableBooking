import { IReservationWindow, ITableState, ITimeView, ReservationWindow } from '../types/types';
export class ReservationModel {
    onChangeModel!: CallableFunction;
    markLine: number;
    timeView: ITimeView;
    currentDate: Date;
    tableState: ITableState;
    hallView: ITableState[];
    busyElement: string;
    freeElement: string;
    guestCount: number;
    chosenDate: Date;
    reservationWindow: IReservationWindow;
    constructor() {
        this.currentDate = new Date();
        this.markLine = this.getCurrentTimeLine();
        const defaultGuestCount = 1;
        this.guestCount = defaultGuestCount;
        this.chosenDate = new Date();
        this.timeView = {
            markLine: this.markLine,
            currentDate: this.currentDate,
            chosenDate: this.chosenDate,
            guestCount: this.guestCount,
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
        this.reservationWindow = {
            modalFlag: ReservationWindow.Main,
            tableNumber: 0,
        };
        this.getHallView();
        console.log(this.hallView);
    }
    bindChangeModel(callback: CallableFunction) {
        this.onChangeModel = callback;
    }
    private commit() {
        this.getHallView();
        this.onChangeModel(this.timeView, this.hallView, this.reservationWindow);
    }
    private getCurrentTimeLine() {
        const hours = this.currentDate.getHours();
        if (hours >= 12 && hours <= 24) {
            return hours - 12 / 2 - 1;
        } else return 1;
    }
    private getHallView() {
        this.hallView = [];
        for (let i = 0; i < 10; i++) {
            const tableType = [4, 4, 2, 4, 4, 8, 2, 6, 2, 6];
            const randChangeT = 5 < Math.random() * 10 ? this.busyElement : this.freeElement;
            const randChangeS = tableType[i] < this.timeView.guestCount ? this.busyElement : this.freeElement;
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
    handleDate(changedDate: Date) {
        this.timeView.chosenDate = changedDate;
        this.commit();
    }
    handleGuest(guestCount: number) {
        this.timeView.guestCount = guestCount;
        this.commit();
    }
    handleClickToTable(tableNumber: number) {
        this.reservationWindow.tableNumber = tableNumber;
        this.reservationWindow.modalFlag = ReservationWindow.Table;
        this.commit();
    }
}
