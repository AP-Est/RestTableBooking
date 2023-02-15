export default function createDevHall() {
    const dateNow = new Date();
    const weekSchedule = getWeekSchedule();
    return weekSchedule;
}
function getDayTableSchedule() {
    const dayTableSchedule = [];
    for (let i = 0; i < 12; i++) {
        dayTableSchedule.push(Math.round(Math.random()));
    }
    return dayTableSchedule;
}
function getDaySchedule() {
    const daySchedule = [];
    for (let i = 0; i < 10; i++) {
        daySchedule.push(getDayTableSchedule());
    }
    return daySchedule;
}
function getWeekSchedule() {
    const weekSchedule = [];
    for (let i = 0; i < 7; i++) {
        weekSchedule.push(getDaySchedule());
    }
    return weekSchedule;
}
