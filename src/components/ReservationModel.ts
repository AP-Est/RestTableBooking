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
    isLogin: boolean;
    dayTableSchedule: number[];
    constructor() {
        this.currentDate = new Date();
        this.markLine = this.getCurrentTimeLine();
        const defaultGuestCount = 1;
        const defaultView = ReservationWindow.Main;
        const defaultTableDuration = 1;
        const defaultDayTableSchedule = [1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1];
        //const defaultView = ReservationWindow.ReservationUnreg;
        this.dayTableSchedule = defaultDayTableSchedule;
        const isLoginDefault = false;
        this.isLogin = isLoginDefault;
        this.guestCount = defaultGuestCount;
        this.chosenDate = new Date();
        this.timeView = {
            markLine: this.markLine,
            currentDate: this.currentDate,
            chosenDate: this.chosenDate,
            guestCount: this.guestCount,
            dayTableSchedule: this.dayTableSchedule,
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
            modalFlag: defaultView,
            tableNumber: 0,
            resTimeNum: 0,
            tableDuration: defaultTableDuration,
            freeHours: 1,
            errors: {
                duration: false,
                name: false,
                phone: false,
            },
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
    handleClickToRButton(resTimeNum: number) {
        this.reservationWindow.resTimeNum = resTimeNum;
        this.reservationWindow.modalFlag = this.isLogin
            ? ReservationWindow.Reservation
            : ReservationWindow.ReservationUnreg;
        this.commit();
    }
    handleClickToShadow() {
        this.reservationWindow.modalFlag = ReservationWindow.Main;
        this.reservationWindow.errors.duration = false;
        this.reservationWindow.freeHours = 1;
        this.reservationWindow.tableDuration = 1;
        this.commit();
    }
    handleSetDuration(tableDuration: number) {
        const schedule = this.timeView.dayTableSchedule;
        let freeHours = 1;
        for (let i = this.reservationWindow.resTimeNum; i < schedule.length; i++) {
            if (schedule[i + 1] == 0) {
                freeHours += 1;
            } else break;
        }
        this.reservationWindow.tableDuration = tableDuration;
        this.reservationWindow.freeHours = freeHours;
        this.reservationWindow.errors.duration = tableDuration > freeHours;
        this.commit();
    }
}
