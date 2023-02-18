export interface ITableOrder {
    start: number;
    duration: number;
    clientID: number;
    orderID: number;
}
export interface IBaseTableOrder {
    tableId: string;
    startAt: string;
    endAt: string;
    userPhone: string;
}

export interface ITableCondition {
    tableID: number;
    tableCondition: ITableOrder[];
}
export interface IHallCondition {
    hallCondition: ITableCondition[];
}

export interface ITimeView {
    markLine: number;
    currentDate: Date;
    chosenDate: Date;
    guestCount: number;
    dayTableSchedule: number[];
}

export interface IReservationWindow {
    modalFlag: ReservationWindow;
    tableNumber: number;
    resTimeNum: number;
    tableDuration: number;
    freeHours: number;
    userName: string;
    userPhone: string;
    errors: IReservationErrors;
}

export interface IReservationErrors {
    duration: boolean;
    name: boolean;
    phone: boolean;
}

export enum ReservationWindow {
    Main = 'Main',
    Table = 'Table',
    Reservation = 'Reservation',
    ReservationUnreg = 'ReservationUnreg',
}

export interface ITableState {
    tableNumber: number;
    tableType: number;
    tableColor: string;
    sitColor: string;
}

export interface IHallState {
    hallState: ITableState[];
}

export interface IRegisteredUser {
    username: string;
    email: string;
    password: string;
}

export interface ISignIn {
    email: string;
    password: string;
}
