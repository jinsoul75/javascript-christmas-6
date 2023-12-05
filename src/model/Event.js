import { AMOUNT, EVENT } from '../constant/constants.js';

class Event {
  #date;

  #event;

  constructor(date) {
    this.#date = date;
  }

  getBenefit() {
    this.#event = [];

    if (this.#date.isBeforeChristmas()) {
      this.#event.push(this.#getChristmasEvent());
    }

    return [...this.#event];
  }

  #getChristmasEvent() {
    const dDay = this.#date.countdDay();

    const disCountAmount =
      AMOUNT.standarddDayEvent + AMOUNT.dDayEventUnit * dDay;

    return [EVENT.christmasdDay, disCountAmount];
  }
}
export default Event;
