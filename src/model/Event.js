import { AMOUNT } from '../constant/constants';

class Event {
  #date;

  #event;

  constructor(date) {
    this.#date = date;
  }

  getEvent() {
    const christmasdDay = this.#getChristmasdDay();
    return { christmasdDay };
  }

  #getChristmasdDay() {
    const dDay = this.#date.countChristmasdDay();
    return AMOUNT.standarddDayEvent + AMOUNT.dDayEvent * dDay;
  }
}

export default Event;
