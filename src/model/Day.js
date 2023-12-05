import DateValidtor from '../validator/DateValidator.js';

class Day {
  #date;

  constructor(date) {
    DateValidtor.validateDate(date);
  }

  getDate() {
    const date = this.#date;
    return date;
  }
}

export default Day;
