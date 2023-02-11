export interface ITableOrder {
    start: number;
    duration: number;
    clientID: number;
    orderID: number;
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
