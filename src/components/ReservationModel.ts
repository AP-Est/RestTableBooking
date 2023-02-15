import { IBaseTableOrder, IReservationWindow, ITableState, ITimeView, ReservationWindow } from '../types/types';
import createDevHall from '../Utils/createDEVexampleHall';
import { getResInfo } from '../Utils/net';
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
    reservationWindow: IReservationWindow;
    isLogin: boolean;
    dayTableSchedule: number[];
    baseTableOrder: IBaseTableOrder;
    devHallSchedule: number[][][];
    timeBelt: number;
    isChosenDayNum: number;
    constructor() {
        console.log(getResInfo());
        this.devHallSchedule = createDevHall();
        this.currentDate = new Date();
        this.markLine = this.getCurrentTimeLine();
        this.timeBelt = new Date().getTimezoneOffset();
        const defaultGuestCount = 1;
        const defaultView = ReservationWindow.Main;
        const defaultTableDuration = 1;
        const defaultDay = 0;
        const defaultDayTableSchedule = [1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1];
        const defaultChosenDate = new Date();
        //const defaultView = ReservationWindow.ReservationUnreg;
        this.dayTableSchedule = defaultDayTableSchedule;
        const isLoginDefault = false;
        this.isLogin = isLoginDefault;
        this.isChosenDayNum = defaultDay;
        this.guestCount = defaultGuestCount;
        this.timeView = {
            markLine: this.markLine,
            currentDate: this.currentDate,
            chosenDate: defaultChosenDate,
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
            resTimeNum: this.currentDate.getHours() - 12 >= 0 ? this.currentDate.getHours() - 12 : 0,
            tableDuration: defaultTableDuration,
            freeHours: 1,
            userName: '',
            userPhone: '',
            errors: {
                duration: false,
                name: false,
                phone: false,
            },
        };
        this.baseTableOrder = {
            tableId: '',
            startAt: '',
            endAt: '',
            userPhone: '',
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
            //const randChangeT = 5 < Math.random() * 10 ? this.busyElement : this.freeElement;
            const randChangeT =
                this.devHallSchedule[this.isChosenDayNum][i][this.reservationWindow.resTimeNum] > 0
                    ? this.busyElement
                    : this.freeElement;
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
    private setBaseTableOrder() {
        if (
            !this.reservationWindow.errors.duration &&
            !this.reservationWindow.errors.name &&
            !this.reservationWindow.errors.phone &&
            this.reservationWindow.userPhone !== '' &&
            this.reservationWindow.userName !== ''
        ) {
            this.baseTableOrder.tableId = `${this.reservationWindow.tableNumber}`;
            this.baseTableOrder.startAt = `${this.timeView.chosenDate.getFullYear()}-${(
                '0' +
                (this.timeView.chosenDate.getMonth() + 1)
            ).slice(-2)}-${this.timeView.chosenDate.getDate()}T${this.reservationWindow.resTimeNum + 12}:00`;
            this.baseTableOrder.endAt = `${this.timeView.chosenDate.getFullYear()}-${(
                '0' +
                (this.timeView.chosenDate.getMonth() + 1)
            ).slice(-2)}-${this.timeView.chosenDate.getDate()}T${
                this.reservationWindow.resTimeNum + this.reservationWindow.tableDuration + 12
            }:00`;
            this.baseTableOrder.userPhone = this.reservationWindow.userPhone;
        }
        //TODO объект заделан теперь отправляем
    }
    handleTimeLine(markLine: number) {
        this.timeView.markLine = markLine;
        this.reservationWindow.resTimeNum = Math.floor((this.timeView.markLine - 1) / 2);
        this.commit();
    }
    handleDate(changedDate: Date) {
        this.timeView.chosenDate = changedDate;
        this.isChosenDayNum =
            0 +
            Math.ceil(
                (Date.parse(`${this.timeView.chosenDate}`) - Date.parse(`${this.currentDate}`)) / 1000 / 60 / 60 / 24
            );
        console.log(this.isChosenDayNum);
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
    handleSetName(userName: string) {
        this.reservationWindow.userName = userName;
        const letters = /^[A-Za-z]{3,}\s?\w*/;
        if (letters.test(userName)) {
            //TODO добавить в объект отправки
            console.log();
            this.reservationWindow.errors.name = false;
        } else {
            this.reservationWindow.errors.name = true;
        }
        this.commit();
    }
    handleSetPhone(userPhone: string) {
        this.reservationWindow.userPhone = userPhone;
        const letters = /^[+]+[0-9]{9,}/;
        if (letters.test(userPhone)) {
            this.reservationWindow.errors.phone = false;
        } else {
            this.reservationWindow.errors.phone = true;
        }
        this.commit();
    }
    handleClickReservation() {
        this.setBaseTableOrder();
        console.log(this.baseTableOrder);
        this.commit();
    }
}
