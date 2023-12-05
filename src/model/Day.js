import { DATE } from '../constant/constants.js';

class Day {
  #date;

  constructor(date) {
    this.#date = Number(date);
  }

  isBeforeChristmas() {
    return this.#date <= DATE.christmas;
  }

  countdDay() {
    return this.#date - DATE.min;
  }

  isWeekend() {
    const fullDate = DATE.getFullDate(this.#date);

    const day = new Date(fullDate);

    return DATE.weekend.includes(day.getDay());
  }

  isSpecialDay() {
    return DATE.specialDay.includes(this.#date);
  }
}

export default Day;
