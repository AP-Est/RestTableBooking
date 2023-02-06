import { ITimeView } from '../types/types';
export class ReservationModel {
    onChangeModel!: CallableFunction;
    markLine: number;
    timeView: ITimeView;
    currentDate: Date;
    constructor() {
        this.currentDate = new Date();
        this.markLine = this.getCurrentTimeLine();
        this.timeView = {
            markLine: this.markLine,
            currentDate: this.currentDate,
        };
    }
    bindChangeModel(callback: CallableFunction) {
        this.onChangeModel = callback;
    }
    private commit() {
        this.onChangeModel(this.timeView);
    }
    private getCurrentTimeLine() {
        const hours = this.currentDate.getHours();
        if (hours >= 12 && hours <= 24) {
            return hours - 12 / 2 - 1;
        } else return 1;
    }
    handleTimeLine(markLine: number) {
        this.timeView.markLine = markLine;
        this.commit();
    }
}
