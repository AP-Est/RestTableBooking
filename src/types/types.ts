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
}

export interface IReservationWindowFlag {
    modalFlag: ReservationWindow;
}

enum ReservationWindow {
    Main = 'Main',
    Table = 'Table',
    Reservation = 'Reservation',
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
