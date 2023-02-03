interface ITableOrder {
    start: number;
    duration: number;
    clientID: number;
    orderID: number;
}

interface ITableCondition {
    tableID: number;
    tableCondition: ITableOrder[];
}
interface IHallCondition {
    hallCondition: ITableCondition[];
}

interface IOrder {
    orderID: number;
    order: string[];
}
