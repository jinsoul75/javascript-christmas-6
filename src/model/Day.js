import DateValidtor from '../validator/DateValidator.js';

class Day {
  #date;

  constructor(date) {
    DateValidtor.validateDate(date);
  }

  getDate() {
    return this.#date;
  }
}

export default Day;
