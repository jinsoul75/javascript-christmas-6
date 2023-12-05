import { DATE } from '../constant/constants.js';

class Day {
  #date;

  constructor(date) {
    this.#date = Number(date);
  }

  countChristmasdDay() {
    if (this.#date <= DATE.christmas) {
      return DATE.min - this.#date;
    }
    return 0;
  }
}

export default Day;
